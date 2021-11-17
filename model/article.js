const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
	judul: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	uploadedFile: {
			path: String,
			type: String,
			size: Number,
			folder: String,
			filename: String,
		},
	tanggal: {
		type: Date,
		default: Date.now,
	},
});

const article = mongoose.model("article", articleSchema);

module.exports = article;
