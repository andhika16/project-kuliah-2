const route = require("express").Router();
const Berita = require("../model/berita");
const Layanan = require("../model/layanan");

// TODO:jika bisa refactor tiap-tiap route

route.get("/", async (req, res) => {
	try {
		const berita = await Berita.find();
		const layanan = await Layanan.find();
		res.render("beranda", {
			title: "Pemdes Ponorogo",
			berita,
			layanan,
		});
	} catch (error) {
		console.log(error);
	}
});

route.get("/layanan", async (req, res) => {
	try {
		const layanan = await Layanan.find();
		res.render("layanan", {
			title: "Layanan Publik Desa Ponorogo",
			subTitle: "Infomasi Pelayanan Desa Ponorogo",
			layanan,
		});
	} catch (error) {
		console.log(error);
	}
});

route.get("/layanan/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const layanan = await Layanan.findById(id);
		res.render("layanan/layanan-page", {
			title: "Layanan Publik Desa Ponorogo",
			subTitle: "Informasi Layanan Publik desa Ponorogo",
			layanan,
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = route;
