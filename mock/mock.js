const map = (array, collback) => {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(collback(array[i]));
	}
	return result;
}

module.exports = map;