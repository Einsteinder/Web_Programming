const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

let fileData = exports = module.exports;

 fileData.getFileAsString = async (path) => {
    if (!path) return Promise.reject("You must provide a path");
    try{
        const fileContent = await fs.readFileAsync(path,"utf-8");
        return fileContent
    } catch(err){
        return Promise.reject(err)
    }
    

}
fileData.getFileAsJSON = async (path) => {
    if (!path) return Promise.reject("You must provide a path");
    try{
        const fileContent = await fs.readFileAsync(path,"utf-8");
        const jsonData = await JSON.parse(fileContent)
        return jsonData
    } catch(err){
        return Promise.reject(err)
    }

}
fileData.saveStringToFile = async (path, text) =>{
    if (!path||!text) return Promise.reject("You must provide a path and contents");
    try{
        await fs.writeFileAsync(path, text);
        return true
    } catch(err){
        return Promise.reject(err)
    }
    
}
fileData.saveJSONToFile = async (path, obj) =>{
    if (!path||!obj) return Promise.reject("You must provide a path and a object");
    try{
        const stringContent = await JSON.stringify(obj,null,4)
        await fs.writeFileAsync(path, stringContent);
        return true
    } catch(err){
        return Promise.reject(err)
    }
}

