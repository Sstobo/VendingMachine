const {
  nickel
} = require('./values');
const {
  dime
} = require('./values');
const {
  quarter
} = require('./values');


module.exports = {

  // DISPLAY FUNCTIONS
  displayCanInventory: function (canType) {
    return canType.stock;
  },
  displayCanName: function (canType) {
    return canType.name;
  },
  displayCanCost: function (canType) {
    return canType.cost;
  },
  displayCoinInventory: function (coin) {
    return coin.stock;
  },
  // SELECTION FUNCTIONS
  selectCan: function (canType) {
    itemPrice = canType.cost;
    return itemPrice;
  },
  // DECREMENTERS
  decCoin: function (coin, ammount) {
    coin.stock -= ammount;
    if (coin.stock < 8) {
      restockCoins(coin);
    }
    return coin;
  },
  incCoin: function (coin) {
    coin.stock += 1;
    return coin;
  },
  decCan: function (canType) {
    canType.stock -= 1;
    return canType;
  },
  makePaymentNickel: function (nickel, itemPrice) {
    itemPrice = itemPrice - 5;
    return itemPrice
  },
  makePaymentDime: function (dime, itemPrice) {
    itemPrice -= 10;
    return itemPrice
  },
  makePaymentQuarter: function (quarter, itemPrice) {
    itemPrice -= 25;
    return itemPrice
  },
  // RESTOCK FUNCTIONS
  restockCoins: function (coin) {
    coin.stock = 20;
    return coin.stock;
  },
  restockCans: function (canType) {
    canType.stock = 10;
    return canType.stock;
  },

  // Change function
  getChange: function (itemPrice) {
    let dimesBack = 0;
    let quartersBack = 0;
    let nickelsBack = 0;
    let moduloDime = 0
    let moduloQuarter = 0
    let change = ""
    itemPrice *= -1;

    if (itemPrice >= 25) {
      moduloQuarter = itemPrice % 25;
      if (moduloQuarter === 0) {
        quartersBack = itemPrice / 25;
        change = quartersBack + " quarters back. ";
        itemPrice = 0;
      } else {
        quartersBack = (itemPrice - moduloQuarter) / 25;
        change += quartersBack + " quarters back. "
        moduloDime = moduloQuarter % 10;
        itemPrice = itemPrice - (quartersBack * 25);
        if (moduloDime === 0) {
          dimesBack = moduloQuarter / 10;
          change += dimesBack + " dimes back. ";
          itemPrice = 0;
        } else {
          dimesBack = (itemPrice - moduloDime) / 25;
          change += dimesBack + " dimes back. "
          itemPrice = itemPrice - (dimesBack * 10);
          if (itemPrice === 5) {
            change += "1 nickle back."
          }
        }
      }

      return change;
      console.log(change)
    }
  }

}