const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let [a, b] = input

console.log(a.charCodeAt()+b.charCodeAt(), Math.abs(a.charCodeAt()-b.charCodeAt()))