const route = require("express").Router();
const { requiresAuth } = require("express-openid-connect");

route.get("/", (req, res) => {
	res.send(req.oidc.isAuthenticated() ? "logged in" : "Logged out");
});

route.get("/user", requiresAuth(), (req, res) => {
	res.send(JSON.stringify(req.oidc.user));
});

route.get("/admin", requiresAuth());

module.exports = route;
