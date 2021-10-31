const route = require("express").Router();
const Berita = require("../model/berita");
const parseHtml = require("../config/parseHTML");
route.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const beritaSisipan = await Berita.find();
		const berita = await Berita.findById(id);
		res.render("berita/berita-page", {
			title: "Berita Desa Ponorogo",
			subTitle: "Informasi Terkini Seputar Desa Ponorogo",
			berita,
			articleBerita: parseHtml(berita.isi),
			beritaSisipan,
		});
	} catch (err) {
		console.log(err);
	}
});

route.get("/", async (req, res) => {
	try {
		const berita = await Berita.find();
		res.render("berita", {
			title: "Kabar Desa",
			subTitle: "Informasi Kabar Desa Ponorogo",
			berita,
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = route;
