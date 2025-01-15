const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b, c] = input

let cnt = 0
let date = 11, hour = 11, min = 11

let start = date * 24 * 60 + hour * 60 + min
let end = a * 24 * 60 + b * 60 + c

if (start > end) {
    console.log('-1')
} else {
    cnt = end - start
    console.log(cnt)
}