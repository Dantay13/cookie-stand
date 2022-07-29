"use strict";

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7mp']

// // create the first location with some properties
// let location1 = {
//     name: "seattle",
//     min: 23,
//     max: 65,
//     avgSale: 6.3,
//     // to store simulated amounts of cookies purchased for each hour
//     cookiesPurchase: [], 

//     // getRandomCustomer: function() {
//     //     return getRandomNumber(thi.min, this.max);
//     // },

//     getRandomCustomer: function() {
//         return Math.floor(Math.random() * (this.max - this.min) + this.min)
//     },
    

//     multiplyCookies: function() {
//         for (let i = 0; i < this.hours.length; i++) {
//             return Math.ceil(Math.random() * (this.max - this.min) + this.min)
//         }
//     },
// }

let location1 = {
    name: "seattle",
    min: 23,
    max: 65,
    avgSale: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7mp'],
    multiplyCookies: [],

    multiply: function () {
        for (let i = 0; i< this.hours.length; i++) {
            console.log(this.hours[i]);
            this.multiplyCookies.push(this.hours[i] * 6.3);
        }
    },
}

location1.multiply();

console.log(location1);

// console.log(location1.getRandomCustomer())

// location1.multiplyCookies();

// console.log(location1.getRandomCustomer());
// // console.log(location1.max);

let location2 = {
    name: "tokyo",
    min: 3,
    max: 24,
    avgSale: 1.2,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7mp'],
    multiply: [],

    getRandomCustomer: function() {
        return getRandomNumber(this.min, this.max);
    },

    multiply: function () {
        for (let i = 0; i< this.hours.length; i++) {
            console.log(this.hours[i]);
            this.multiplyCookies.push(this.hours[i] * 1.2);
        }
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

location1.multiply();

console.log(location2);

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



// create a function to times the number of cookies to the number of customers



// location1.getRandomCustomer(23, 65);
// location2.getRandomCustomer(3, 24);
// location3.getRandomCustomer(11, 38);
// location4.getRandomCustomer(20, 38);
// location5.getRandomCustomer(2, 16);

// console.log(location1.getRandomCustomer);