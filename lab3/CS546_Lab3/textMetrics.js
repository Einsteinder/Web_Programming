let textMetrics = exports = module.exports;
textMetrics.simplify = (text)=>{
    if(typeof(text)!== "string"){
        throw "Please input string"
    }

    var newListString = []
    var newString = ""
    let listString = text.split(/[^0-9a-zA-z]/)
    for(var i = 0, size = listString.length; i < size ; i++){
        var item = listString[i].replace(/[^0-9a-zA-z]/g,'').toLowerCase()
        if(item === ""){
            continue
        }
        newListString.push(item)
    }
   // let lowercaseText = text.toLowerCase()
    //let removedText =lowercaseText.replace(/[^0-9a-z]/g,'')
    return newListString.join(" ")

}

textMetrics.createMetrics=(text)=>{
    if(typeof(text)!== "string"){
        throw "Please input string"
    }
    var newString = textMetrics.simplify(text)
    var stringList = newString.split(" ")
    var metrics = {
        totalLetters: newString.length,
        totalWords: stringList.length,
        uniqueWords: 0,
        longWords: 0,
        averageWordLength: stringList.join("").length/stringList.length,
        wordOccurrences: {}

    }
    for(var i = 0, size = stringList.length; i < size; i++){
        if(stringList[i].length >= 6){
            metrics.longWords ++
        }
        if(stringList[i] in metrics.wordOccurrences){
            metrics.wordOccurrences[stringList[i]] = metrics.wordOccurrences[stringList[i]]+1
        }else{
            metrics.wordOccurrences[stringList[i]] = 1
        }

    }
    metrics.uniqueWords = Object.keys(metrics.wordOccurrences).length
    return metrics

}

