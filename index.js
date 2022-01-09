const moment = require("moment");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));  

console.log(moment().isValid("2020-01-01"));
console.log(moment().isValid("2020-14-01"));

console.log(moment().subtract(7, 'months'));
console.log(moment().subtract(7, 'years')); 
console.log(moment().subtract(7, 'days'));  

console.log(moment().add(7, 'days'));     
console.log(moment().add(7, 'months'));     
console.log(moment().add(7, 'years'));     


var admisson = moment('11-11-2014', 'DD-MM-YYYY');
var discharge = moment('11-09-2015', 'DD-MM-YYYY');
console.log(discharge.diff(admisson, "days"));


let date1 = moment('27-11-2014', 'DD-MM-YYYY');
let date2 = moment('16-09-2015', 'DD-MM-YYYY');
console.log(date2.diff(date1, "days"));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());




let date3 =  moment('01-01-2010', 'DD-MM-YYYY');
let date4 =  moment('01-01-2018', 'DD-MM-YYYY');

if(date3.diff(date4, "days") > 0){
    console.log(true);
} else{
    console.log(false);

}


let date5 =  moment('01-01-2020', 'DD-MM-YYYY');
let date6 =  moment('01-01-2018', 'DD-MM-YYYY');

if(date5.diff(date6, "days") > 0){
    console.log(true);
}else{
    console.log(false);
}

// lodash Array methods

const lodash = require("lodash");


let array = [1,0,undefined,"",true,false,100,"Hello",null,NaN,200];

console.log(lodash.compact(array));



let numbers = [1,2,3];

let otherNumbers = [4,5,6,7,8];

console.log(lodash.concat(numbers,otherNumbers));


let newNumber = lodash.drop(otherNumbers,3);
console.log(newNumber);

let arraysInArray = [1,[2,3,[4,5,[6,7,[8,9]]]]];

console.log(lodash.flattenDeep(arraysInArray));

let repeatedNUmbers = [1,2,3,4,5,12,3,4,5,8,9,2,3,2,2,1,1]

console.log(lodash.without(repeatedNUmbers, 1,2,3));


//  lodash Collection Methods


let words = ["One", "Two", "Three", "four", "Five", "Six"];

console.log(lodash.groupBy(words, "length"));

console.log(lodash.includes(words, "Three"));

console.log(lodash.reject(otherNumbers, function(e) {return e > 6}));

console.log(lodash.size(otherNumbers));


function square(n){
    return n * n
}

console.log(lodash.map(otherNumbers, square));

console.log(lodash.shuffle(otherNumbers));