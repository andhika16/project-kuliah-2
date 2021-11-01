const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const uploadFeature = require("@admin-bro/upload");
const Berita = require("../model/berita");
const Layanan = require("../model/layanan");

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
			features: [
				uploadFeature({
					provider: { local: { bucket: "public" } },
					properties: {
						key: "gambar", // to this db field feature will safe S3 key
						mimeType: "mimeType", // this property is important because allows to have previews
					},
					validation: {
						mimeTypes: "application/pdf",
					},
				}),
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
