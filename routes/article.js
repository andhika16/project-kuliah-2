const route = require("express").Router();
const Article = require("../model/article");

route.get("/", async (req, res) => {
	res.render("article", {
		title: "article",
		article: await Article.find(),
	});
});
route.get("/detail/:id", async (req, res) => {
	const id = req.params.id;
	res.render("article/article-detail", {
		title: "article",
		article: await Article.findById(id),
	});
});

module.exports = route;
