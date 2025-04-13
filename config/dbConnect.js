const mongoose = require("mongoose");
//  ? databases connection
module.exports = function connect(keys, name) {
	mongoose
		.connect(keys, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log(`database ${name} terhubung`);
		})
		.catch((err) => console.log(err));
};
