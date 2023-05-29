let number=[1,2,3,4,5,6,7,8,9,10]
let chunksize=1;
function chArray(number,chunksize){
    let result=[]
    if (chunksize< 1){
        return 'Chuck size must have a value greater than zero';
    }
    else{
        for(let i=0;i<number.length;i+=chunksize){
            result.push(number.slice(i,i + chunksize));
    
        }
    
        return result

    }
    

}

let output=chArray(number,chunksize)


console.log(output);


function arrayChk(array, chSize){
    let chValues=Math.ceil(array.length/chSize)
    let ch=[]
    let i=0;

    while(i<chValues){
        ch.push(array.slice(i*chSize,(i+1)*chSize))
        i++
    }
    return ch
}

// console.log(arrayChk([12,23,4,5,76,8,9,90],3));
console.log(arrayChk([12,23,4,5,76,8,9,9,9,8,7,6,5,4,3,2,1],4));