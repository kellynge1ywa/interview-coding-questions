function myFizz(value){
    for (let i=1;i<=value;i++){
        if(i%4==0 && i%8==0){
            console.log('There is a match');
        }
        else 
            if(i%4==0){
                console.log('Match with only 4');

            }
            else if(i%8==0){
                console.log('Match with only 8');
            }
            else{
                console.log(i);
            }
        }
    }



myFizz(20)  


module.exports=myFizz

