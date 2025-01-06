fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const [n, m] = input[0].split(' ')
const arr = input[1].split(' ')

let cnt = 0;

for (let i of arr) {
    if (i === m) cnt++
}

console.log(cnt)