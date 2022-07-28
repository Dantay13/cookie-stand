"use strict";

// create the first location with some properties
let location1 = {
    name: "seattle",
    min: 23,
    max: 65,
    avgSale: 6.3,

    getRandomCustomer: function() {
        return getRandomNumber(this.min, this.max);
    },
}
console.log(location1.getRandomCustomer());
// console.log(location1.max);

let location2 = {
    name: "tokyo",
    min: 3,
    max: 24,
    avgSale: 1.2,

    getRandomCustomer: function() {
        return getRandomNumber(this.min, this.max);
    },
}

console.log(location2.getRandomCustomer());

let location3 = {
    name: "dubai",
    min: 11,
    max: 38,
    avgSale: 3.7,

    getRandomCustomer: function() {
        return getRandomNumber(this.min, this.max);
    },
}

console.log(location3.getRandomCustomer());

let location4 = {
    name: "paris",
    min: 20,
    max: 38,
    avgSale: 2.3,

    getRandomCustomer: function() {
        return getRandomNumber(this.min, this.max);
    },
    
}

console.log(location4.getRandomCustomer());

let location5 = {
    name: "lima",
    min: 2,
    max: 16, 
    avgSale: 4.6,   
    
    getRandomCustomer: function() {
        return getRandomNumber(this.min, this.max);
    },
}

console.log(location5.getRandomCustomer());

// creating a random number function.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min );
}

// location1.getRandomCustomer(23, 65);
// location2.getRandomCustomer(3, 24);
// location3.getRandomCustomer(11, 38);
// location4.getRandomCustomer(20, 38);
// location5.getRandomCustomer(2, 16);

// console.log(location1.getRandomCustomer);