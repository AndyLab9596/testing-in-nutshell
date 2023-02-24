import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined(); // right test
            // expect(token).toBe(2); // wrong test
            done();
        } catch (err) {
            done(err);
        }
    });
})

it('it should generate a token value (with Promise)', () => {
    const testUserEmail = 'test@test.com';
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('it should generate a token value (with Promise and async await)', async () => {
    const testUserEmail = 'test@test.com';
    const token = await generateTokenPromise(testUserEmail);
    expect(token).resolves.toBeDefined();
});