import { add } from '../src/sum';

describe('Testing Add Function', () =>{
    test('Checking Empty string',() =>{
        const result = add('');
        expect(result).toBe(0);
    });
    test('Checking with single number',() =>{
        const result = add('1');
        expect(result).toBe(1);
    });
});