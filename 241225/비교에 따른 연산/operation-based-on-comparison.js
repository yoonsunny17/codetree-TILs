fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')

let [a, b] = [Number(input[0]), Number(input[1])]

if (a > b) {
    console.log(a * b)
} else {
    console.log(parseInt(b / a))
}