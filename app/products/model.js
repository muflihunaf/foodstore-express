const mongoose = require('mongoose');

const {model, Schema} = mongoose;

const productSchema = Schema({
    name: {
        type: String,
        minlength: [3,'Panjang Karakter minimal 3 karakter'],
        maxlength: [255, 'Panjang nama makanan maksimal 255 karakter'],
        required: [true, 'Nama Product Harus Diisi']
    },

    description: {
        type: String,
        maxlength: [1000, 'Panjang Deskripsi Maksimal 1000 karakter']
    },

    price: {
        type: Number,
        default: 0
    },
    image_url: String,

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag'
        }
    ]
}, {timestamps: true});

module.exports = model('Product', productSchema);
