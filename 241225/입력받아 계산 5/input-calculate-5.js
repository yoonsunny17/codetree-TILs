fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')

console.log(Number(input[0]) + Number(input[1]))