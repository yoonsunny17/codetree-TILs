fs = require('fs')
input = fs.readFileSync(0).toString().split('\n')

const p1 = input[0].split(' ')
const p2 = input[1].split(' ')

console.log((Number(p1[0]) >= 19 && p1[1] === 'M') || (Number(p2[0]) >= 19 && p2[1] === 'M') ? 1 : 0)