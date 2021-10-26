const route = require("express").Router();
const Berita = require("../model/berita");
route.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const berita = await Berita.findById(id);
		const beritaSisipan = await Berita.find();
		res.render("berita/berita-page", {
			title: "Berita Desa Ponorogo",
			subTitle: "Informasi Terkini Seputar Desa Ponorogo",
			berita,
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
