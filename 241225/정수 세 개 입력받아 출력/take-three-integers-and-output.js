fs = require('fs')
input = fs.readFileSync(0).toString().split('\n')

const ab = input[0].split(' ')
const c = Number(input[1])
console.log(Number(ab[0]), Number(ab[1]), c)