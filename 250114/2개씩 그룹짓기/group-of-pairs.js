const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

numbs.sort((a, b) => a-b)

let maxVal = 0
for (let i=0; i<n; i++) {
    const calc = numbs[i] + numbs[2*n-1-i]

    maxVal = Math.max(calc, maxVal)
}

console.log(maxVal)