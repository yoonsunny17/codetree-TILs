const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b, c, d] = input

let dist1 = a * 60 + b
let dist2 = c * 60 + d

console.log(dist2 - dist1)