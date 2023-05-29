function reverseNumbers(num){
    let reversedNum=Math.abs(num).toString().split('').reverse().join('')
    let reversedNegative=reversedNum
    let NegativeNum= num < 0
    return NegativeNum ? -reversedNegative: reversedNegative
    return parseInt(reversedNum)*Math.sign(num)
    
}

let reversedOutput=reverseNumbers(-902)
console.log(reversedOutput);

// console.log(parseInt('321-'));


