fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')

let [a, b] = input

console.log(a.slice(0, 2) + b.slice(2, b.length))