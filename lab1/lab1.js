function sumOfSquare(num1, num2, num3){
    if(typeof(num1)!="number"||typeof(num1)!="number"||typeof(num1)!="number"){
        throw "Please input number."
    }
    return num1 * num1 + num2 * num2 + num3 * num3
}

function sayHelloTo(){
    if(arguments.length == 1){
        console.log("Hello, " + arguments[0]+"!")
    }
    else if(arguments.length == 2){
        console.log("Hello, " + arguments[0] + " " + arguments[1] + ". I hope you are having a good day!")
    }
    else if(arguments.length == 3){
        console.log("Hello, " + arguments[2]+ " "+ arguments[0] + " " + arguments[1] +"! Have a good evening!")
    }
    else{
        throw "Please input 1-3 argument"

    }
}

function cupsOfCoffee(num){
    if(typeof(num)!="number"){
        throw "Please input number."
    }
    if(num <= 0){
        throw "Please input at least 1"
    }
    var quantityOfCoffee = num
    var lyrics = ""
    while(quantityOfCoffee > 1){
        lyrics += quantityOfCoffee.toString() + " cups of coffee on the desk! "+ quantityOfCoffee.toString() + " cups of coffee!\n"+"Pick one up, drink the cup, "+ (quantityOfCoffee-1).toString() +" cups of coffee on the desk!\n" +"\n" 
        quantityOfCoffee --
    }
    return lyrics + "1 cup of coffee on the desk! 1 cup of coffee!\nPick it up, drink the cup, no more coffee left on the desk!"
    

}
function occurrencesOfSubstring(fullString, substring){
    var countOfString = 0
    var indexOfString = 0
    if(typeof(fullString)!="string"||typeof(substring)!="string"){
        throw "Please input string parameter."
    }
    while(true){
        indexOfString = fullString.indexOf(substring,indexOfString + 1)
        if (indexOfString > 0){
            countOfString += 1
        }else{
            return countOfString
        }
    }
}

function randomizeSentences(paragraph){
    if(typeof(paragraph)!="string"){
        throw "Please input string parameter."
    }
    var splitParagraph = paragraph.match( /[^\.!\?]+[\.!\?]+/g )
    var countOfLength = splitParagraph.length
    var newParagraph = []
    while(countOfLength > 0){
        var indexOfRandom = Math.floor(Math.random() * countOfLength)
        newParagraph.push(splitParagraph[indexOfRandom])
        splitParagraph.splice(indexOfRandom,1)
        countOfLength--    
    }
    return newParagraph.join(" ")

}

