// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
    // console.log(drivers.slice(0,2))
}

returnFirstTwoDrivers()

const returnLastTwoDrivers = function() {
    return drivers.slice(-2)

}
returnLastTwoDrivers()

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
    return function(number) {
        return fare * number
        
    }
}

let fareDoubler = createFareMultiplier(2)

let fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, returnLastTwoDrivers) {
  return returnLastTwoDrivers(arrayOfDrivers)  
}