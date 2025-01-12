const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let idx = 0
let cnt = 0
let arr = []
while (true) {
    if (input[idx] === '0') break;

    if (idx % 2 === 0) {
        arr.push(input[idx])
    }

    cnt++
    idx++
}

console.log(cnt)

for (let i of arr) {
    console.log(i)
}