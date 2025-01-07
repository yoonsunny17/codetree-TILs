fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const costs = input[1].split(' ').map(Number)

let minCost = Number.MAX_SAFE_INTEGER
let maxProfit = -1

for (let i=0; i<n; i++) {
    minCost = costs[i]

    for (let j=i; j<n; j++) {
        if (costs[j] - minCost > maxProfit) {
            maxProfit = costs[j] - minCost
        }
    }
}

console.log(maxProfit)