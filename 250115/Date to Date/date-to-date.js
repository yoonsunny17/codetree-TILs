const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [m1, d1, m2, d2] = input

let num_of_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


function calc(m1, d1, m2, d2) {
    let cnt = 0
    let month = m1, day = d1
    while (true) {
        if (month === m2 && day === d2) {
            break;
        }

        cnt++
        day++

        if (day > num_of_days[month]) {
            month++
            day = 1
        }
    }

    return cnt
}

console.log(calc(m1, d1, m2, d2))