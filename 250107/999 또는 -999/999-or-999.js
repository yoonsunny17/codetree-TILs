fs = require('fs')
numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const INT_MIN = Number.MAX_SAFE_INTEGER
const INT_MAX = Number.MIN_SAFE_INTEGER

let [minVal, maxVal] = [INT_MIN, INT_MAX]
for (let i=0; i<numbs.length; i++) {
    if (numbs[i] === 999 || numbs[i] === -999) break;

    if (minVal > numbs[i]) minVal = numbs[i]
    if (maxVal < numbs[i]) maxVal = numbs[i]
}

console.log(maxVal, minVal)
