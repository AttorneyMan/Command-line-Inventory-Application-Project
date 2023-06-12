const {readFileSync, writeFileSync} = require("node:fs")



function readJsonFile(path, fileName){
const object = readFileSync(`${path}/${fileName}`, "utf-8")
return object ? JSON.parse(object) : [] 

};


function writeJsonFile(path, fileName, data){

data = JSON.stringify(data)
return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8"})

};

module.exports = {
    readJsonFile,
    writeJsonFile,
}