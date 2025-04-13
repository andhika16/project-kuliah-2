const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const uploadFeature = require("@admin-bro/upload");
const Berita = require("../model/berita");
const Layanan = require("../model/layanan");
const Article = require("../model/article");
const path = require("path");
// const pathToUpload = path.resolve("config/uploads");
// "pindahan data c/documents/sinau web/kuliah/project-kuliah-2

// console.log(pathToUpload);

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
	resources: [
		{
			resource: Layanan,
			options: { listProperties: ["icon", "judul", "body"] },
		},
		{
			resource: Berita,
			options: {
				listProperties: ["tanggal", "judul", "subJudul", "isi"],
				properties: {
					isi: { type: "richtext" },
				},
			},
			// features: [
			// 	uploadFeature({
			// 		provider: {
			// 			local: { bucket: path.join(__dirname, "../public/img/berita") },
			// 		},
			// 		properties: {
			// 			key: "uploadedFile.path",
			// 			bucket: "uploadedFile.folder",
			// 			mimeType: "uploadedFile.type",
			// 			size: "uploadedFile.size",
			// 			filename: "uploadedFile.filename",
			// 			file: "uploadFile",
			// 		},
			// 	}),
			// ],
		},
		{
			resource: Article,
			options: {
				properties: {
					body: { type: "richtext" },
					uploadedFile: { isVisible: false },
				},
			},
			features: [
				// uploadFeature({
				// 	provider: {
				// 		local: {
				// 			bucket: path.resolve("config/uploads"),
				// 		},
				// 	},
				// 	properties: {
				// 		key: "uploadedFile.path",
				// 		bucket: "uploadedFile.folder",
				// 		mimeType: "uploadedFile.type",
				// 		size: "uploadedFile.size",
				// 		filename: "uploadedFile.filename",
				// 		file: "uploadFile",
				// 	},
				// 	// uploadPath: (record, filename) => `${record.id()}/${filename}`,
				// }),
			],
		},
	],
	dashboard: {},
	rootPath: "/admin",
	branding: {
		companyName: "Pemdes Tatung Admin",
	},
});

module.exports = adminBro;
