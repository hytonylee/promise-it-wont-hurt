'use strict'
require('es6-promise')

//// Exercise #3: To Reject or Not Reject
const promise = new Promise((fulfill, reject) => {
    fulfill('I FIRED')
    reject(new Error('I DID NOT FIRE'))
})
 const onRejected = (error) => {
      console.log(error.message)
}
promise.then(console.log, onRejected)


//// Exercise #2: Fulfilling a Promise
// const promise = new Promise((fulfill, reject) => {
//     setTimeout(() => {
//         fulfill('FULFILLED!')
//     }, 300)
// }).then(console.log)

//// Exercise #1: Warm Up
// setTimeout(() => {
//     console.log('TIMED OUT!')
// }, 300)
