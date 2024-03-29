const mongoose = require('mongoose');

const {model, Schema} = mongoose;

const tagSchema = Schema({
    name: {
        type: String,
        minLength: [3, 'Panjang nama tag minimal 3 karakter'],
        maxLength: [20, 'Panjang nama tag maksimal 20 karakter'],
        required: [true, 'Nama Kategori Harus Diisi']
    }
});


module.exports = model('Tag', tagSchema);