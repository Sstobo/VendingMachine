const {pepsiCans} = require('./values');
const {cokeCans} = require('./values');
const {crabJuiceCans} = require('./values');
const {nickel} = require('./values');
const {dime} = require('./values');
const {quarter} = require('./values');
const coinReturn = require('./values');
const coinPayment = require('./values');

// Display functions
const {displayCoinInventory} = require('./functions');
const {displayCanInventory} = require('./functions');
const {displayCanName} = require('./functions');
const {displayCanCost} = require('./functions');
// Selection functions
const {selectCan} = require('./functions');
// Decrementer functions
const {decCan} = require('./functions');
const {decCoin} = require('./functions');
const {incCoin} = require('./functions');
// Payment functions
const {makePaymentNickel} = require('./functions');
const {makePaymentQuarter} = require('./functions');
const {makePaymentDime} = require('./functions');
const {restockCoins} = require('./functions');
const {restockCans} = require('./functions');
const {getChange}= require('./functions');
// Variable declarations

let itemPrice = 1.0;

class VendingMachine {
    constructor(pepsiCans, cokeCans, crabJuiceCans, nickel, dime, quarter) {
      this.pepsiCans = pepsiCans;
      this.cokeCans = cokeCans;
      this.crabJuiceCans = crabJuiceCans;
      this.nickel = nickel;
      this.dime = dime;
      this.quarter = quarter;
    }
  }


function buyCan(canType, numNickles, numDimes, numQuarters) {
    
  console.log("You have chosen: ", displayCanName(canType));
  setTimeout(() => console.log("This costs ",   canType.cost), 500);
  setTimeout(() => console.log("################"), 1000);
 
  itemPrice = selectCan(canType);
 

//  NICKEL PAYMENT BLOCK
    for(let i = 0; i < numNickles; i ++) {
    itemPrice = makePaymentNickel(newMachine.nickel, itemPrice);
    incCoin(nickel)
    }
    setTimeout(() => console.log("Recieved ", numNickles, " nickels. The remaining nickels are: ", displayCoinInventory(nickel)), 3000);

// DIME PAYMENT BLOCK
    for(let i = 0; i < numDimes; i ++) {
    itemPrice = makePaymentDime(newMachine.dime, itemPrice);
    incCoin(dime);
    }
    setTimeout(() => console.log("Recieved ", numDimes, " dimes. The remaining dimes are ", displayCoinInventory(dime)), 4000);

// QUARTER PAYMENT BLOCK
    for(let i = 0; i < numQuarters; i ++) {
    itemPrice = makePaymentQuarter(newMachine.quarter, itemPrice);
    incCoin(quarter)
    }
    setTimeout(() => console.log("Recieved ", numQuarters, " quarter. The remaining quarters are: ", displayCoinInventory(quarter)), 5000);

// PAYMENT ACCEPTED
    setTimeout(() =>  console.log("########### PAYMENT ACCEPTED #############"), 6000);
    setTimeout(() => console.log("Price difference is: ", itemPrice, " cents."), 7000);

// CHANGE GENERATOR AND ITEM DISPENSOR
  if(itemPrice < 0){
    setTimeout(() => console.log("Dispensing change"), 8000);
    setTimeout(() => console.log(getChange(itemPrice)), 9000);
    decCan(canType);
    setTimeout(() => console.log("Here is your can of ", canType.name), 10000);
    setTimeout(() => console.log("You have ", canType.stock, " left in the machine."), 11000);
    
  }
  if(nickel.stock < 10 || dime.stock < 10 || quarter.stock < 10) {
    restockCoins(nickel, dime, quarter)
  }
  if(canType.stock < 5) {
    restockCans(canType);
  }
}

let newMachine = new VendingMachine(pepsiCans, cokeCans, crabJuiceCans, nickel, dime, quarter)

buyCan(newMachine.pepsiCans, 6, 8, 5);
