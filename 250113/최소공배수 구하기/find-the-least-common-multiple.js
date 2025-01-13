const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [n, m] = input
let rlt = 1
while (true) {
    if (rlt % n === 0 && rlt % m === 0) break;
    rlt++;
}

console.log(rlt)