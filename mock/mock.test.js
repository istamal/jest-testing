const map = require('./mock');

describe('Map testing', () => {
	let array;
	let fn;

	beforeEach(() => {
		array = [1, 2, 3, 4, 5];
		fn = jest.fn(item => item ** item);
		map(array, fn);
	});

	test('should callback function called', () => {
		// map(array, fn); переносим в beforeEach потому что там вызов будет перед каждым кейсом
		expect(fn).toBeCalled();
	});

	test('should colled correctly times', () => {
		// map(array, fn); переносим в beforeEach потому что там вызов будет перед каждым кейсом
		expect(fn).toBeCalledTimes(array.length);
		expect(fn.mock.calls.length).toBe(array.length);
	})

	test('should return correct result', () => {
		const result = map(array, fn);
		// map(array, fn); переносим в beforeEach потому что там вызов будет перед каждым кейсом
		expect(result).toEqual([1, 4, 27, 256, 3125]);
		// или
		expect(fn.mock.results[0].value).toBe(1);
		expect(fn.mock.results[1].value).toBe(4);
		expect(fn.mock.results[2].value).toBe(27);
		expect(fn.mock.results[3].value).toBe(256);
		expect(fn.mock.results[4].value).toBe(3125);
	});

	test('should fn work', () => {
		fn
			.mockReturnValueOnce(100)
			.mockReturnValueOnce(200)
			.mockReturnValue('42');

		expect(fn()).toBe(100);
		expect(fn()).toBe(200);
		expect(fn()).toBe('42');
		expect(fn()).toBe('42');
		expect(fn()).toBe('42');
	});
});