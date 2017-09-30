function myGlobalFunction(){
    console.log("I'm a global function");

}

function printThisMessage(message){
    console.log("We've received a message!");
    console.log(message);

}
let doubleUp = (x) =>{
    return x * 2;
};

let addToTheNumber = function(num){
    return(addThisMuch)=>{
        return num + addThisMuch;
    }
}; 


myGlobalFunction();
printThisMessage("Hello, CS-546");
console.log(doubleUp(16));

let addToTwelve = addToTheNumber(12)
console.log(addToTwelve);
console.log(addToTwelve(8));

function countToThisNumber(num){
    for(let i = 0; i < num; i++){
        console.log(`the number is ${i}`)
    }
}
countToThisNumber(12)