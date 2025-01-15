const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b, c] = input

let cnt = 0
let date = 11, hour = 11, min = 11
while (true) {
    if (date === a && hour === b && min === c) {
        break;
    }

    cnt++
    min++

    if (min === 60) {
        hour++
        min = 0
    }

    if (hour === 24) {
        date++
        hour = 0
    }
}

console.log(cnt)