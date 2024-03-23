const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AutoIncremnet = require('mongoose-sequence')(mongoose);
const {model, Schema} = mongoose;
const HASH_ROUND = 10;

let userSchema = Schema({
    full_name: {
        type: String,
        required: [true, 'Nama Harus Diisi'],
        maxLength: [255, 'Panjang nama harus antara 3 - 255 karakter'],
        minLength: [3, 'Panjang nama harus antara 3 - 255 karakter']
    },

    customer_id: {
        type: Number
    },

    email: {
        type: String,
        required: [true, 'Email Harus Diisi'],
        maxLength: [255, 'Panjang Email Karakter maksimal 255 karakter']
    },

    password: {
        type: String,
        required: [true, 'Password Harus Diisi'],
        maxLength: [255, 'Panjang Password maksimal 255 karakter']
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },

    token: [String]
}, {timestamps: true});

userSchema.path('email').validate(function(value){
    const EMAIL_RE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    return EMAIL_RE.test(value);
}, attr => `${attr.value} harus merupakan email yang valid`);

userSchema.path('email').validate(async function(value){
    try{
        const count = await this.model('User').countDocuments({email: value});

        return !count;
    }catch(err){
        throw err;
    }
}, attr => `${attr.value} Sudah Terdaftar`);

userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, HASH_ROUND);
    next();
});

userSchema.plugin(AutoIncremnet, {inc_field: 'customer_id'});

module.exports = model('User', userSchema);

