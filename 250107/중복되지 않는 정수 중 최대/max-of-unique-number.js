fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const numbs = input[1].split(' ').map(Number)

let cnt = 0
const INT_MAX = Number.MIN_SAFE_INTEGER
let maxVal = INT_MAX

numbs.sort((a, b) => b-a)

for (let i=0; i<n; i++) {
    if (numbs[i] > maxVal) {
        maxVal = numbs[i]
        cnt = 1
    } else if (numbs[i] === maxVal) {
        cnt++
    }

    if (cnt > 1 && numbs[i] < maxVal) {
        maxVal = numbs[i]
        cnt=1
    }
}

console.log(cnt === 1 ? maxVal : -1)