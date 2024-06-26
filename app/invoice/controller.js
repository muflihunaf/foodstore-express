const {subject} = require('@casl/ability');
const Invoice = require('./model');
const { policyFor } = require('../policy');
const midtransClient = require('midtrans-client');
const Order = require('../order/model');
const config = require('../config');
let snap = new midtransClient.Snap({
  isProduction: config.midtrans.isProduction,
  serverKey: config.midtrans.serverKey,
});
async function show(req,res,next){
  try {
    let { order_id } = req.params;
    let invoice = await Invoice
                        .findOne({order: order_id})
                        .populate('order')
                        .populate('user');
    let policy = policyFor(req.user);
    let subjectInvoice = subject('Invoice',{...invoice, user_id: invoice.user._id});

    if(!policy.can('read', subjectInvoice)){
      return res.json({
        error: 1,
        message: 'Anda tidak memiliki akses untuk melihat invoice ini'
      });
    }
    return res.json(invoice);

  } catch (err) {
    return res.json({
      error: 1,
      message: 'error when geting invoice'
    })
  }
}

async function initiatePayment(req,res){
  try {
    let { order_id } = req.params;
    let invoice = await Invoice.findOne({order: order_id}).populate('order').populate('user');
    if (!invoice) {
      return res.json({
        error: 1,
        message: `Invoice not found`
      });
    }
    let parameter = {
      transaction_details: {
        order_id: invoice.order._id,
        gross_amount: invoice.total
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: invoice.user.full_name,
        email: invoice.user.email
      }
    }

    let response = await snap.createTransaction(parameter);
    return res.json(response);
  } catch (err) {
    console.log(err);
    return res.json({
      error: 1,
      message: 'Something when wrong'
    });
  }
}

async function handleMidtransNotification(){
  try {
    let statusResponse = await snap.transaction.notification(req.body);
    let orderId = statusResponse.order_id;
    let transactionStatus = statusResponse.transaction_status;
    let fraudStatus = statusResponse.fraud_status;

    if (transactionStatus === 'capture') {
      if (fraudStatus === 'challenge') {
        await snap.transaction.approve(orderId);
        await Invoice.findOneAndUpdate({order: orderId}, {payment_status: 'paid'});
        await Order.findOneAndUpdate({_id: orderId}, {status: 'processing'});
        return res.json('success');
      }else if (fraudStatus == 'accept'){
        await Invoice.findOneAndUpdate({order: orderId}, {payment_status: 'paid'});
        await Order.findOneAndUpdate({_id: orderId}, {status: 'processing'});
        return res.json('success')
      }else{
        return res.json('ok');
      }
    }else if (transactionStatus == 'settlement'){
      await Invoice.findOneAndUpdate({order: orderId}, {payment_status: 'paid'}, {new: true});
      await Order.findOneAndUpdate({_id: orderId}, {status: 'delivered'});
      return res.json('ok');
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json('Something went wrong');
  }
}
module.exports = {
  show,
  initiatePayment,
  handleMidtransNotification
}
