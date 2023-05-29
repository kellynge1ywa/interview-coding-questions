const { describe } = require('node:test')
const myFizz=require('./fizzbuzz')

describe(myFizz,()=>{
    test('return 0 when value is 0',()=>{
        expect(myFizz(0)).toEqual([])
    }),
    test('return no number when there is no value',()=>{
        expect(myFizz(0)).toEqual([])
    }),
    test('return 1 when value is only 1',()=>{
        expect(myFizz(1)).toEqual([1])
    }),
    test('return number when value is not divisible by 4 and 8',()=>{
        expect(myFizz(3)).toEqual([3])
    }),
    test('return "Match with 4 " when value is only divisible by 4',()=>{
        expect(myFizz(4)).toEqual(['Match with only 4'])
    }),
    test('return "There is a match" when value is only divisible by both 4 and 8',()=>{
        expect(myFizz(8)).toEqual(['There is a match'])
    }),

    test('should find numbers divisible by 4 and 8 between 1 and 20',()=>{
        const expectedOutput=[
            '1',
            '2',
            '3',
            'Match with only 4',
            '5',
            '6',
            '7',
            'There is a match',
            '9',
            '10',
            '11',
            'Match with only 4',
            '13',
            '14',
            '15',
            'There is a match',
            '17',
            '18',
            '19',
            'Match with only 4',
            
        ]



        myFizz(20)
        expect(output).tobe(expectedOutput)
    })

    
})