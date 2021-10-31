"use strict";

require("dotenv").config({ path: "./config/config.env" }); // ? peletakan dotenv harus paling atas

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const dbConnect = require("./config/dbConnect");
const expresslayout = require("express-ejs-layouts");
const AdminBroExpress = require("@admin-bro/express");
const adminBro = require("./config/adminBroConfig");
// * ------------------ ADMINBRO ----------------------

const router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

// * ------------------ END ADMINBRO ----------------------

dbConnect(process.env.DB, "pemdes"); // * database connection

app.listen(PORT, () => {
	console.log(`Admin dan Server berjalan di port : ${PORT}`);
});

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
