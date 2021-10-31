const DOMParser = require("dom-parser");

module.exports = (str) => {
	const parser = new DOMParser();
	const { rawHTML } = parser.parseFromString(str, "text/html");
	return rawHTML;
};

// ! saat render data di ejs jangan menggunakan <%= tapi gunakan <%-
