const mongoose = require('mongoose');

const layananSchema = new mongoose.Schema({

    icon: {
        type: String
    },
    judul: {
        type: String,
        required:true
    },
    body: {
        type: String,
        required:true
    }
}, {
    timestamps:true
})

const Layanan = mongoose.model('layanan', layananSchema)

module.exports = Layanan