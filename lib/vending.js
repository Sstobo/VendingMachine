const {pepsiCans} = require('./values');
const {cokeCans} = require('./values');
const {crabJuiceCans} = require('./values');
const {nickel} = require('./values');
const {dime} = require('./values');
const {quarter} = require('./values');
const coinReturn = require('./values');
const coinPayment = require('./values');

// Function declarations
const {displayCoinInventory} = require('./functions');
const {displayCanInventory} = require('./functions');
const {displayCanName} = require('./functions');
const {displayCanCost} = require('./functions');
const {makePaymentNickel} = require('./functions');
const {makePaymentQuarter} = require('./functions');
const {makePaymentDime} = require('./functions');
const {restockCoins} = require('./functions');
const {restockCans} = require('./functions');
const {selectCan} = require('./functions');
const {decCan} = require('./functions');
const {decCoin} = require('./functions');
const {incCoin} = require('./functions');
// Variable declarations

let itemPrice = 1.0;



// function buyCan(canType) {
//   console.log("You have chosen: ", displayCanName(canType));
//   console.log("This costs ",   displayCanCost(canType));
//   console.log("################")
 
//   itemPrice = selectCan(canType);
//   console.log("initial price", itemPrice)

//   itemPrice = makePaymentQuarter(quarter, itemPrice);
//   itemPrice = makePaymentQuarter(quarter, itemPrice);
//   itemPrice = makePaymentQuarter(quarter, itemPrice);
 
//   incCoin(quarter)
//   decCoin(quarter)
//   decCoin(quarter)
 
//   console.log("Remaining nickels are: ", displayCoinInventory(nickel));
//   console.log("Remaining quarters are: ", displayCoinInventory(quarter));
//   console.log("The remaining cans are ", displayCanInventory(canType));
//   console.log("still owe: ", itemPrice)
//   if(itemPrice < 0){
//     decCan(canType);
//     console.log("Here is your can of ", canType.name);
//     console.log("You have ", canType.stock, " left in the machine.")
//   }
//   if(nickel.stock < 10 || dime.stock < 10 || quarter.stock < 10) {
//     restockCoins(nickel, dime, quarter)
//   }
//   if(canType.stock < 5) {
//     restockCans(canType);
//   }
// }

// buyCan(cokeCans);