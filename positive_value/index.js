function positiveValues(digit){
    
    if(digit<=0){
        console.log("A positive number is required");
    }


    for (let level=1;level<=digit;level++){
        let step="";


        for (let gap=1;gap<=digit-1;gap++){
            step+='' ;
        }

        for(let star=1;star<=level;star++){
            step+="@"

        }

        console.log(step);
    }
}


positiveValues(10)

module.exports=positiveValues


// function steps(no) {

//     if (no < 0) {

//         console.log("invalid");
//     }
//     let hash = "#"
//     let space = " "
//     for (let index = 1; index <= no; index++) {
//         console.log(hash.repeat(index) + space.repeat(no - index));
//     }
// }

// steps(3)


// function steps(n, row = 0, stair = '') {
//     if (n === row) {
//         return
//     }
//     if (n === stair.length) {
//         console.log(stair);
//         return steps(n, row + 1)
//     }
//     stair.length <= row ? stair += '#' : stair += ' '
//     steps(n, row, stair)
// }
// steps(5)

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return
    }
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1)
    }
    stair.length <= row ? stair += '*' : stair += ' '
    steps(n, row, stair)
}

steps(8)