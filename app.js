"use strict";

const dotenv = require("dotenv");
const express = require("express");
const app = express();
const uri =
	"mongodb+srv://andhika:dhika.12345@node-tuts.4yfq2.mongodb.net/pemdes_tatung?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;
const path = require("path");
const dbConnect = require("./config/dbConnect");
const expresslayout = require("express-ejs-layouts");
const AdminBroExpress = require("@admin-bro/express");
const adminBro = require("./config/adminBroConfig");
// ? ------------------ ADMINBRO ----------------------

const router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

// ? ------------------ END ADMINBRO ----------------------

dbConnect(uri, "pemdes"); // * database connections

app.listen(PORT, () => {
	console.log(`Admin dan Server berjalan di port : ${PORT}`);
});

dotenv.config({
	path: __dirname + "./config/config.env",
});
console.log(process.env.PORT);

// layout
app.set("view engine", "hbs");
app.use(expresslayout);
app.set("view engine", "ejs");
// middleware
app.use(express.static("public"));
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use("/", require("./routes/index"));
app.use("/berita", require("./routes/berita"));
app.use("/profil", require("./routes/profil"));
