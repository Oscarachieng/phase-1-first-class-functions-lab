// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    let firstTwo = drivers.slice(0,2)
    return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
   let lastTwo = drivers.slice(-2);
   return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(input) {
     return function fareResults(fares) {
         let distance = 5;
         return fares * distance;
     }
}

const fareDoubler = function fareResults(fares){
    fares = 10;
    return fares*2
}

const fareTripler = function fareResults(fares){
    fares = 12;
    return fares*3
}

function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers ){
   return returnFirstTwoDrivers(arrayOfDrivers);
}