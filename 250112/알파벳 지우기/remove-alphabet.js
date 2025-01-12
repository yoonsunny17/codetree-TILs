const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = input

let [aa, bb] = ['', '']

for (let i of a) {
    if (i >= '0' && i <= '9') {
        aa += i
    }
}
for (let i of b) {
    if (i >= '0' && i <= '9') {
        bb += i
    }
}

console.log(Number(aa)+Number(bb))