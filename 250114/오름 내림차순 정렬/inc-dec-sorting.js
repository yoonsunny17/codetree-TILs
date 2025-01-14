const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

console.log(numbs.sort((a, b) => a-b).join(' '))
console.log(numbs.sort((a, b) => b-a).join(' '))
