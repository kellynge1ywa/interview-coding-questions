function repeatedcharacters(sentence) {
    let values=[];
    

    // for (let word of sentence){
       
    // }
    for (let i = 0; i < str.length; i++) {

        let word = sentence[i];
        
        values[word] = values[word] + 1 || 1;
        
        }

    let wordCount=0;
    let mostAppearingletter= '';

    for (let word in values){
        if (values[word] > wordCount){
            wordCount=values[word];
            mostAppearingLetter=word;

        }
    }

    return mostAppearingletter

}

let sentence="elephant";

let mostLetter=repeatedcharacters(sentence)
console.log(mostLetter);