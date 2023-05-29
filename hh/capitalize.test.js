const capitalizeCharacter=require('./capitalize')


describe(capitalizeCharacter,()=>{
    test('capitalize a single word',()=>{
        let input=capitalizeCharacter('hello');
        expect(input).toBe('Hello')
    });

    test('capitalize first letter of multiple words',()=>{
        let input=capitalizeCharacter('good morning')
        expect(input).toBe('Good Morning')
    });
    test('return nothing when no word is passed',()=>{
        let input=capitalizeCharacter(' ')
        expect(input).toBe(' ')
    });
    test('return same value when the first letters are capitalized',()=>{
        let input=capitalizeCharacter('Good Morning')
        expect(input).toBe('Good Morning')
    });
    test('ignore spaces',()=>{
        let input=capitalizeCharacter(' good morning ')
        expect(input).toBe(' Good Morning ')
    })

})