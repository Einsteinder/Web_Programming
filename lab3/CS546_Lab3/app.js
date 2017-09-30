const fileData = require("./fileData")
const textMetrics = require("./textMetrics")

function main(fileName){
    var re = /.*(?=\.)/
    var jsonFileName = fileName.match(re).toString()+".result.json"
    try{
        const jsonObject = fileData.getFileAsJSON(jsonFileName)
        jsonObject.then(function(value){
            console.log(value)
        })
    }catch(err){
        console.log(err)
    }finally{
        //console.log(err)
        const fileString = fileData.getFileAsString(fileName)
        console.log(fileString)
        fileString.then(function(v){
            let jsonFile = textMetrics.createMetrics(v)
            fileData.saveJSONToFile(jsonFileName,jsonFile)
            console.log(jsonFile)
        })

    }

}
main("chapter1.txt")
main("chapter2.txt")
main("chapter3.txt")
