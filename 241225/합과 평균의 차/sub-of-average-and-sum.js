fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')
let [a, b, c] = [Number(input[0]), Number(input[1]), Number(input[2])]
const v1 = a+b+c
const v2 = (a+b+c) / 3
const v3 = v1 - v2

console.log(v1)
console.log(v2)
console.log(v3)