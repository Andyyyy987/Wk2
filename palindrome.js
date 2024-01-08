// let num = 12344321;

// for(let i =0; i < num.length / 2; i++)
//     if (num [i] !=num[num.length])

let num = "1271";
let stringStatus = "is";

for ( let i = 0; i < num.length / 2; i++){
    if ( num[i] != num[num.length - 1 - i] ){
        stringStatus = "not"
        break;
    };
};

if (stringStatus == "not"){
    
