URLSearchParams.prototype.toObject = function () {
	let obj = {};
	for (let pair of this.entries()) {
		const [key, value] = pair;
		obj[key] = value;
	}
	return obj;
};
