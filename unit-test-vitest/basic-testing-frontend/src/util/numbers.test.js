import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform string into number', () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(1);
});