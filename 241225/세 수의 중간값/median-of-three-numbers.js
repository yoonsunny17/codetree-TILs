fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')

let [a, b, c] = input

console.log(b > a && b < c ? 1 : 0)