const {pepsiCans} = require('./../__mocks__/mock-api');
const {cokeCans} = require('./../__mocks__/mock-api');
const {crabJuiceCans} = require('./../__mocks__/mock-api');
const {nickel} = require('./../__mocks__/mock-api');
const {dime} = require('./../__mocks__/mock-api');
const {quarter} = require('./../__mocks__/mock-api');
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

 function buyCan(canType, amount, numNickles, numDimes, numQuarters) {
  setTimeout(() => console.log("Welcome to the VentoTron Xtreme! There are three beverages to chose from!"), 1000);
  setTimeout(() => console.log("Drink: ", newMachine.pepsiCans.name, " Cost: ", (newMachine.pepsiCans.cost / 100) + "$"), 1000);
  setTimeout(() => console.log("Drink: ", newMachine.cokeCans.name, " Cost: ", (newMachine.cokeCans.cost / 100)+ "$"), 1000);
  setTimeout(() => console.log("Drink: ", newMachine.crabJuiceCans.name, " Cost: ", (newMachine.crabJuiceCans.cost / 100) + "$"), 1000);
  setTimeout(() => console.log("################ Place your order! #################"), 1000);
  itemPrice = selectCan(canType);
  itemPrice *= amount;  

  setTimeout(() => console.log("You have chosen: ", amount, displayCanName(canType)), 2500);
  setTimeout(() => console.log("This costs ", ((canType.cost / 100) * amount), "$."), 2500);
  setTimeout(() => console.log("################"), 3000);
 

//  NICKEL PAYMENT BLOCK
    for(let i = 0; i < numNickles; i ++) {
    itemPrice = makePaymentNickel(newMachine.nickel, itemPrice);
    incCoin(nickel)
    }
    setTimeout(() => console.log("Recieved ", numNickles, " nickels. The remaining nickels are: ", displayCoinInventory(nickel)), 4000);

// DIME PAYMENT BLOCK
    for(let i = 0; i < numDimes; i ++) {
    itemPrice = makePaymentDime(newMachine.dime, itemPrice);
    incCoin(dime);
    }
    setTimeout(() => console.log("Recieved ", numDimes, " dimes. The remaining dimes are ", displayCoinInventory(dime)), 5000);

// QUARTER PAYMENT BLOCK
    for(let i = 0; i < numQuarters; i ++) {
    itemPrice = makePaymentQuarter(newMachine.quarter, itemPrice);
    incCoin(quarter)
    }
    setTimeout(() => console.log("Recieved ", numQuarters, " quarter. The remaining quarters are: ", displayCoinInventory(quarter)), 6000);

// PAYMENT ACCEPTED
    setTimeout(() =>  console.log("########### PAYMENT ACCEPTED #############"), 7000);
    setTimeout(() => console.log("Price difference is: ", (itemPrice / 100), "$."), 8000);

// CHANGE GENERATOR AND ITEM DISPENSOR

  if(itemPrice < 0){
      for(var i = 0; i <= amount; i++) {
        decCan(canType);
        if(canType.stock < 2){
        restockCans(canType);
        setTimeout(() => console.log("Cans Restocked!"), 9000);
    }
      }
    setTimeout(() => console.log("Dispensing change"), 9000);
    setTimeout(() => console.log(getChange(itemPrice)), 10000);

    if(nickel.stock < 10 || dime.stock < 10 || quarter.stock < 10) {
        restockCoins(newMachine.nickel, newMachine.dime, newMachine.quarter);
        setTimeout(() => console.log("Coins Restocked!"), 9000);
      }

    setTimeout(() => console.log("Here is your ", amount, " can(s) of ", canType.name), 11000);
    setTimeout(() => console.log("You have ", canType.stock, " can(s) of ", canType.name, " remaining."), 11000);
    // setTimeout(() => console.log("You have ", canType.stock, " cans of ", canType.name, " left in the machine."), 11000);
  } else {
    setTimeout(() => console.log("Im Sorry! You didnt pay enough, you still owe: ", (itemPrice / 100), "$."), 9000);
  }
 
  if(canType.stock < 5) {
    restockCans(canType);
    console.log("Cans restocked!")
  }
}

let newMachine = new VendingMachine(pepsiCans, cokeCans, crabJuiceCans, nickel, dime, quarter)

buyCan(newMachine.cokeCans, 3, 10, 1, 1);
