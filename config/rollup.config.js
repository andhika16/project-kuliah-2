const replace = require("@rollup/plugin-replace");

module.exports = {
	input: "src/index.js",
	output: {
		dir: "output",
		format: "cjs",
	},
	plugins: [
		replace({
			preventAssignment: true,
			"process.browser": true,
			"process.env.NODE_ENV": JSON.stringify(mode),
		}),
	],
};
