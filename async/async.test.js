const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios');

describe('Async: echo', () => {
	test('should return correct data', async () => {
		const data = await Ajax.echo('some data');
		expect(data).toBe('some data');
	});

	test('should return correct data', async () => {
		try {
			await Ajax.echo();
		} catch (err) {
			expect(err.message).toBe('error');
		}
	});
});

describe('Ajax: GET', () => {
	let response;
	let todos;

	beforeEach(() => {
		todos = [
			{ id: 1, title: 'todo 1', complited: true },
		];

		response = {
			data: {
				todos,
			},
		};
	});

	test('should fetch data from backend', () => {
		axios.get.mockReturnValue(response);

		return Ajax.get().then(data => {
			expect(data.todos).toEqual(todos);
		});
	});
});