const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const beritaSchema = new mongoose.Schema(
	{
		uploadedFile: {
			path: String,
			type: String,
			size: Number,
			folder: String,
			filename: String,
		},
		gambar: {
			type: String,
			required: false,
		},
		tanggal: {
			type: String,
			required: true,
		},
		judul: {
			type: String,
			required: true,
		},
		subJudul: {
			type: String,
			required: true,
		},
		isi: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Berita = mongoose.model("berita", beritaSchema);

module.exports = Berita;
