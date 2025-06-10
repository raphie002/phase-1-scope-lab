// Write your solution in this file!
var customerName = "bob"

function checkcustomerName() {
    console.log(customerName)
}

function upperCaseCustomerName() {
    customerName = "BOB"
    console.log(customerName)
}

var bestCustomer

function setBestCustomer() {
    bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer() {
    throw ("Assignment to constant variable.")
}