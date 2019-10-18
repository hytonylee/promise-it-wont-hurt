//// Exercise #2: Fulfilling a Promise
'use strict'
require('es6-promise')
const promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        fulfill('FULFILLED!')
    }, 300)
}).then(console.log)

//// Exercise #1: Warm Up
// 'use strict'
// setTimeout(() => {
//     console.log('TIMED OUT!')
// }, 300)
