fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const costs = input[1].split(' ').map(Number)

let minIdx = -1
let minCost = Number.MAX_SAFE_INTEGER

let maxIdx = -1
let maxCost = Number.MIN_SAFE_INTEGER

for (let i=0; i<n; i++) {
    if (costs[i] < minCost) {
        minCost = costs[i]
        minIdx = i
    }
}

for (let i=0; i<n; i++) {
    if (i > minIdx && costs[i] > maxCost) {
        maxCost = costs[i]
        maxIdx = i
    }
}

console.log(maxIdx === -1 ? 0 : maxCost-minCost)