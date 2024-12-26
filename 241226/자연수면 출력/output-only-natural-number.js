fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')
let [a, b] = input
let rlt = []

if (Number(a) <= 0) {
    console.log(0)
} else {
    for (let i=1; i<=b; i++) {
        rlt.push(a)
    }

    console.log(rlt.join(''))
}