fs = require('fs')
numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const INT_MIN = Number.MIN_SAFE_INTEGER

let maxVal = INT_MIN
for (let i=0; i<10; i++) {
    if (numbs[i] > maxVal) maxVal = numbs[i]
}

console.log(maxVal)



