let sentence="Goodafternoon"

function reverseSentence(str){
    let reversedSentence=''
    for(let i=str.length;i<0;i--){
        reversedSentence+=str[i]
    }
    return reverseSentence
}



console.log(reverseSentence(sentence));


// function r


const reversedStr=(str)=>{
    return str ==='' ? '' : reversedStr(str.slice(1)) + str[0]
}
let word="kelvinuipiu"
console.log(reversedStr(word));