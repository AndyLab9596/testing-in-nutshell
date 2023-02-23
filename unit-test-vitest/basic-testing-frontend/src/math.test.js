import { it, expect } from "vitest";
import { add } from "./math";

it('should summarize all number values in an array', () => {
    // Arrage
    const numbers = [1,2,3, 4];
    const expectedResults = numbers.reduce((a, b) => a + b);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResults);
});

it('should yield NaN if at least one invalid number is provided', () => {
    const inputs = ['invalid', 1];

    const result = add(inputs);

    expect(result).toBeNaN();
});

it('should yield numeric sum if an array of numeric string values is provided', () => {
    const inputs = ['1', '2'];
    const expectedResults = inputs.reduce((a, b) => +a + +b);

    const result = add(inputs);

    expect(result).toBe(expectedResults);
});

it('should yield 0 if an empty array is provided', () => {
    const input = [];

    const result = add(input);

    expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow()
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFnc = () => {
        add(num1, num2);
    };

    expect(resultFnc).toThrow(/is not iterable/);
});