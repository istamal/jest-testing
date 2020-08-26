const axios = require('axios');

class Ajax {
	static echo(data) {
		return new Promise((resolve, reject) => {
			if (data) {
				resolve(data);
			} else {
				reject(new Error('error'));
			}
		});
	}

	static async get() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
			return response.data;
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = Ajax;