// Display function declarations
const {displayCanInventory} = require('./../lib/functions');
const {displayCanName} = require('./../lib/functions');
const {displayCanCost} = require('./../lib/functions');
const {displayCoinInventory} = require('./../lib/functions');

// Selection functions
const {selectCan} = require('./../lib/functions');

// Decrement / Increment function declarations
const {decCoin} = require('./../lib/functions');
const {incCoin} = require('./../lib/functions');
const {decCan} = require('./../lib/functions');
const {incCan} = require('./../lib/functions');
const {makePaymentDime} = require('./../lib/functions');
const {makePaymentQuarter} = require('./../lib/functions');
const {makePaymentNickel} = require('./../lib/functions');
const {restockCoins} = require('./../lib/functions');
const {restockCans} = require('./../lib/functions');

// Change function
const {getChange} = require('./../lib/functions');

// Variable declarations
const {pepsiCans} = require('./../lib/values');
const {cokeCans} = require('./../lib/values');
const {crabJuiceCans} = require('./../lib/values');
const {nickel} = require('./../lib/values');
const {dime} = require('./../lib/values');
const {quarter} = require('./../lib/values');


describe('Vending Machines tests', () => {
    test('Return the stock level of Pepsi can test 1' , () => {
      const result = displayCanInventory(pepsiCans);
      expect(result).toEqual(10);
    });
    test('Return the name of a specified type of can' , () => {
      const result = displayCanName(cokeCans);
      expect(result).toEqual("Coke");
    });
    test('Return the cost of a specified type of can' , () => {
      const result = displayCanCost(crabJuiceCans);
      expect(result).toEqual(150);
    });
    test('Display the adjusted cost of $1.00 when a nickel is spent' , () => {
      const result = makePaymentNickel(nickel, 100);
      expect(result).toEqual(95);
    });
    test('Choose can type to buy, set price' , () => {
      const result = selectCan(cokeCans);
      expect(result).toEqual(200);
    });
    test('Restock all coins' , () => {
      const result = restockCoins(nickel, dime, quarter);
      expect(result).toEqual(20, 20, 20);
    });
    test('Restock one type of cans' , () => {
      const result = restockCans(cokeCans);
      expect(result).toEqual(10);
    });
    test('Getting change for.50 cents in quarters' , () => {
      const result = getChange(-50);
      expect(result).toEqual("2 quarters back. ");
    });
    test('Getting the ammount of dimes change for.70 cents' , () => {
      const result = getChange(-70);
      expect(result).toEqual("2 quarters back. 2 dimes back. ");
    });
    test('Getting the ammount of quarters, nickels, and dimes change for.70 cents' , () => {
      const result = getChange(-80);
      expect(result).toEqual("3 quarters back. 0 dimes back. 1 nickle back.");
    });
  });