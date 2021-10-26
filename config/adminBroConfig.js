const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const Berita = require("../model/berita");
const Layanan = require("../model/layanan");
AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
	resources: [
		Layanan,
		{
			resource: Berita,
			options: {
				properties: {
					id: {
						isVisible: {
							list: false,
							show: true,
						},
					},
					isi: {
						isVisible: {
							type: "richtext",
						},
					},
				},
			},
		},
	],
	rootPath: "/admin",
	branding: {
		companyName: "Pemdes Tatung Admin",
		softwareBrothers: false,
	},
});

module.exports = adminBro;
