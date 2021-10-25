const mongoose = require('mongoose');

const beritaSchema = new mongoose.Schema({

    gambar: {
        type: String
    },
    tanggal: {
        type: String,
        required:true
    },
    judul: {
        type: String,
        required:true
    },
    subJudul: {
        type: String,
        required:true
    },
    isi: {
        type: String,
        required:true
    },
}, {
    timestamps:true
})

const Berita = mongoose.model('berita', beritaSchema)

module.exports = Berita