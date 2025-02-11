import { add } from '../src/sum';

describe('Testing Add Function', () =>{
    test('Checking Empty string', () =>{
        const result = add('');
        expect(result).toBe(0);
    })
});