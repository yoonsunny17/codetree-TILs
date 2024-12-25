fs = require('fs')
input = fs.readFileSync(0).toString()

let n = (Number(input) * 30.48).toFixed(1)
console.log(n)