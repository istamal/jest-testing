const Lodash = require('./sync');

let _ = new Lodash();

describe('Lodash: compact', () => {

	let array;
	// вынесено на глобальный скоуп потому что если определить его внитри beforeEach то он не будет виден в других блоках

	beforeEach(() => {
		array = [false, 42, 0, '', true, 'string'];
	});
	// До начало запуска каждого кейса к array присваивается такой массив, что бы после кокого небудь кейса массив не изменялся

	afterAll(() => {
		_ = new Lodash();
	})

	test('should be defined', () => {
		expect(_.compact).toBeDefined();
		expect(_.compact).not.toBeUndefined();
	});

	test('should remove all falsy items', () => {
		const result = [42, true, 'string'];
		expect(_.compact(array)).toEqual(result);
	});

	test('should be aditable', () => {
		// этот кейс как раз и изменяет массив
		array.push('one');
		array.push('two');
		expect(_.compact(array)).toContain('one');
		expect(_.compact(array)).toContain('two');
	});
	
});

describe('Lodash: groupeBy', () => {
	
	test('should be defined', () => {
		expect(_.groupeBy).toBeDefined();
		expect(_.groupeBy).not.toBeUndefined();
	});

	test('should return correct object with Math.floor prop', () => {
		const arr = [2.1, 2.3, 3.5, 4.5];
		const result = {
			2: [2.1, 2.3],
			3: [3.5],
			4: [4.5],
		};
		expect(_.groupeBy(arr, Math.floor)).toEqual(result);
	});

	test('should return correct object with length prop', () => {
		const arr = ['one', 'two', 'three'];
		const result = {
			3: ['one', 'two'],
			5: ['three'],
		};
		expect(_.groupeBy(arr, 'length')).toEqual(result);
	});

});