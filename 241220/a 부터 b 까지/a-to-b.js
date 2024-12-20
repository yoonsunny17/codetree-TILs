const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')
let a = Number(input[0])
let b = Number(input[1])

let rlt = []

while (a <= b) {
    rlt.push(a)
    if (a % 2 === 0) {
        a += 3
    } else a *= 2
}

console.log(rlt.join(' '))