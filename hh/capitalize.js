function capitalizeCharacter(word){
    let inputs=word.split(" ");


    let CapsLetter=inputs.map(function(input){
        return input.charAt(0).toUpperCase() + input.slice(1);

    });
    let output=CapsLetter.join(" ");

    return output;

    }

    let inputWord=" good morning "
    console.log(capitalizeCharacter(inputWord));

    module.exports=capitalizeCharacter

