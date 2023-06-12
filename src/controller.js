const inventory = require("../data/SampleItemBag.json");
const {nanoid} = require("nanoid")
const clc = require("cli-color");





function dex (shoppingBag){
return shoppingBag.map(
    (eachItem) => `name: ${eachItem.name} price: ${eachItem.price} color: ${eachItem.color} inStock ${eachItem.inStock}`
 );
}


function update (shoppingBag, id , itemBought) {
    const dex = shoppingBag.findIndex((receipt) => receipt.id === id);
    const newBag = inventory.find((receipt) => receipt.name === itemBought);
     
    if (dex > -1) {
    shoppingBag[dex].item = itemBought;
    shoppingBag[dex].price = newBag.price;
    shoppingBag[dex].color = newBag.color;
    shoppingBag[dex].inStock = newBag.inStock
    return shoppingBag;
    }
}


function create (shoppingBag , name) {
    const bag = inventory.find((certainName) => certainName.name === name );
    const newP = {
        id: `${nanoid(8)}`,
        name: bag.item,
        price: bag.price,
        color: bag.color,
        inStock: bag.inStock,
    };
    shoppingBag.push(newP); 
  return shoppingBag;
}


function view (shoppingBag , name ){
    let oneThing = shoppingBag.filter((item) => item.item === item);
    for (let root of oneThing) {
        return `${clc.red(root.oneThing) + clc.blue(root.price) + clc.blue(root.color) + clc.magentaBright(root.inStock)}`;
    }
};

function deleteCart (shoppingBag) {
    if(shoppingBag.length > 0) {
        shoppingBag.splice(0, shoppingBag.length);
        return shoppingBag
    }
};

function total (shoppingBag) {
let priceWatched = shoppingBag.map((total) => total.price)
return priceWatched
}


module.exports = { 
    dex,
    update, 
    create, 
    view, 
    deleteCart,
    total,
   
}