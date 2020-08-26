const sum = require('./sum');

describe('Sum function testing', () => {
	test('should return correst mathematic result', () => {
		expect(sum(2, 2)).toBe(4);
		expect(sum(2, 4)).toEqual(6);
	});
	
	test('should return corrrect comparing result', () => {
		expect(sum(2, 7)).toBeGreaterThan(8);
		expect(sum(2, 7)).toBeGreaterThanOrEqual(9);
	});
	
	test('should return correct floating result', () => {
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
	});
});