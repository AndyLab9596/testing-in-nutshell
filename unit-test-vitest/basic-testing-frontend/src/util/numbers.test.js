import { expect, it, describe } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numbers = ['1', '2'];

        const cleanedNumbers = cleanNumbers(numbers);

        // expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1, 2]);
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const numbers = ['', 1];

        const cleanedFn = () => cleanNumbers(numbers);

        expect(cleanedFn).toThrow();
    })
})


describe('transformToNumber()', () => {
    it('should transform string into type of number', () => {
        const input = "1";

        const result = transformToNumber(input);

        expect(result).toBeTypeOf('number');
    });

    it('should transform string into number', () => {
        const input = "1";

        const result = transformToNumber(input);

        expect(result).toBe(+input);
    });

    it('should yield NaN for non-transformable values', () => {
        const input = "invalid";
        const input2 = {};

        const result = transformToNumber(input);
        const result2 = transformToNumber(input2);

        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    })
})
