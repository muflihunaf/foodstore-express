const mongoose = require('mongoose');

const {model, Schema} = mongoose;

const OrderItemSchema = Schema({
  name: {
    type: String,
    minLength: [5, 'Panjang Nama makanan minimal 50 karakter'],
    required: [true, 'Name must be filled']
  },

  price: {
    type: Number,
    required: [true, 'Harga item harus diisi']
  },

  qty: {
    type: Number,
    required: [true, 'Qty harus diisi'],
    min: [1, 'Kuantitas minimal 1']
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }
});
module.exports = model('OrderItem', OrderItemSchema);
