fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')

const v1 = Number(input[0]) + Number(input[1])
const v2 = Number(input[0]) - Number(input[1])

console.log((v1/v2).toFixed(2))