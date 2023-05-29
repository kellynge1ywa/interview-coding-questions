const { describe } = require('node:test')
const positiveValues=require('./index')

describe(positiveValues,()=>{
    test('ignore empty value',()=>{
        let input=positiveValues('a whole number');
        expect(input).toBe('a whole number steps')
    })
})