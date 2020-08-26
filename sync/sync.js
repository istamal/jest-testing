class Lodash {
	compact(array) {
		return array.filter(item => item);
	}

	groupeBy(array, prop) {
		return array.reduce((acc, item) => {
			const key = typeof prop === 'function' ? prop(item) : item[prop];
			if (!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(item);
			return acc;
		}, {});
	}
}

module.exports = Lodash;