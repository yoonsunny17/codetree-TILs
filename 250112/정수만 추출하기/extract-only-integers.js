const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let [a, b] = input

let numbs = Array.from({length: 10}, (_, i) => i)

let aa = ''
let bb = ''
for (let i of a) {
    if (numbs.includes(Number(i))) {
        aa += i
    } else break;
}
for (let i of b) {
    if (numbs.includes(Number(i))) {
        bb += i
    } else break;
}

console.log(Number(aa) + Number(bb))