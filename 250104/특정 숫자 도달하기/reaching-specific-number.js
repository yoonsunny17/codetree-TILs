fs = require('fs')
numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let arr = []
for (let numb of numbs) {
    if (numb >= 250) break;
    else arr.push(numb)
}

let val = 0
for (let i of arr) {
    val += i
}

console.log(val, (val / arr.length).toFixed(1))