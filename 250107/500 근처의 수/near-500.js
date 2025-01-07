fs = require('fs')
numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let minVal = Number.MAX_SAFE_INTEGER
let maxVal = Number.MIN_SAFE_INTEGER

for (let numb of numbs) {
    if (numb < 500 && numb > maxVal) {
        maxVal = numb
    }

    if (numb > 500 && numb < minVal) {
        minVal = numb
    }
}

console.log(maxVal, minVal)