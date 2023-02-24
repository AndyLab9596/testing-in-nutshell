import { it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');

it('should execute the writeFile method', () => {
    const testData = "";
    const testFilename = "test.txt";
    
    writeData(testData, testFilename)
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined()
    expect(fs.writeFile).toBeCalled();

});