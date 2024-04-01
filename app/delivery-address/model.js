const { Schema, model } = require("mongoose");

const deliverySchema = Schema({
  nama: {
    type: String,
    required: [true, 'Nama alamat harus diisi'],
    maxLength: [255, 'Panjang Maksimal nama alamat karakter adalah 255 karakter']
  },
  kelurahan: {
    type: String,
    required: [true, 'Kelurahan alamat harus diisi'],
    maxLength: [255, 'Panjang Maksimal nama kelurahan karakter adalah 255 karakter']
  },
  kecamatan: {
    type: String,
    required: [true, 'Kecamatan alamat harus diisi'],
    maxLength: [255, 'Panjang Maksimal kecamatan karakter adalah 255 karakter']
  },

  kabupaten: {
    type: String,
    required: [true, 'kabupaten kabupaten harus diisi'],
    maxLength: [255, 'Panjang Maksimal kabupaten karakter adalah 255 karakter']
  },

  provinsi: {
    type: String,
    required: [true, 'Nama provinsi harus diisi'],
    maxLength: [255, 'Panjang Maksimal karakter adalah 255 karakter']
  },

  detail: {
    type: String,
    required: [true, 'Nama alamat harus diisi'],
    maxLength: [1000, 'Panjang Maksimal karakter adalah 1000 karakter']
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {timestamps: true});

module.exports = model('DeliveryAddress', deliverySchema);
