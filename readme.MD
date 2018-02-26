# The Vending Machine

This is a javascript vending machine! The primary purpose of this project was to develop with JS in a Test Driven Development (TDD) environment. This program takes input including product type to buy, quantity, and amount of nickles, dimes and quarters you wish to spend. It will decerement product stock, increment coins in the machine, and produce exact change using the least amount of coins possible.

![Alt text](/public/VM3.png "Preview Picture")

## Getting Started

Download or clone github files.
Run:
* npm install 
* npm install --save-dev -g jest

### Running the tests

To view the testing functions: 

![Alt text](/public/VM1.png )

Navigate to the root dir
In your teminal run:
* jest __tests__/vending.spec.js    

### Running the program

To use the machines vending function: 


Open vending.js in VSCode or your chosen text editor.
![Alt text](/public/VM4.png )

* edit lines 120-124 
Navigate to /lib/ 
In your teminal run:
* node vending.js

### Stretch goals

The machine will always dispense the smallest amount of coins as change. Tested and functioning.

### Future goals

I would like to incorporate a simple visual interface using React.

## Built With

* [Node.js]
* [Jest]
* [Javascript]

## Authors

* **Sean Stobo**

## Acknowledgments


* Thanks to our instructors for their guidance
* This one's all me