const announce = console.log;
const clc = require("cli-color");
const {readJsonFile, writeJsonFile} = require("./src/helper")
const data = require("./data/SampleItemBag.json")
const { dex, update,  create,  view,  deleteCart, total,} = require("./src/controller")

function run(){
  
  announce(clc.red.bgWhite.underline("Welcome To The Majic Hair Shop"));

let transcations = readJsonFile(
    "data", "shoppingBag.json"
    );
let writetofile = false;
let newReceipts = [];

const action = process.argv[2];
const receipt = process.argv[3];

    switch (action) {
        case "dex" :
            const majic = dex(transcations)
            announce(majic);
            break;
       
        case "create":
            newReceipts = create(transcations, receipt);
            writetofile = true;
            break; 
        
        case "update":
            newReceipts = update(transcations,receipt, process.argv[4]);
            writetofile = true;
            break;

        case "view":
            const lookAtThings = view(transcations, receipt);
            announce(lookAtThings);
            break;

        case "deleteCart":
            newReceipts = deleteCart(newReceipts, receipt)
            writetofile = true;
            break;

        case "total":
            let updatedTotal = total(data)
            announce(updatedTotal);
            break;
      
        case "inStock":
            let quanity = inStock(data)
            announce(quanity);
            break;

       default:
        announce(clc.red("Error!" + clc.blue("You Have No") + "Magic🪄"));
         }

         if(writetofile) {
    writeJsonFile("./data", "shoppingBag.json", newReceipts);
 }
 announce("\n 🪄 ");

};
run();