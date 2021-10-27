const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
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
				properties: {
					id: {
						isVisible: {
							list: false,
							show: false,
						},
					},
				},
				listProperties: ["tanggal", "judul", "subJudul", "isi"],
			},
		},
	],
	dashboard: {},
	rootPath: "/admin",
	branding: {
		companyName: "Pemdes Tatung Admin",
		softwareBrothers: false,
	},
});

module.exports = adminBro;
