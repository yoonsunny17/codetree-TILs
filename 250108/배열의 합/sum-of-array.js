fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const n = 4

for (let i=0; i<n; i++) {
    let arr = input[i].split(' ').map(Number)
    let sum = arr.reduce((total, curr) => total += curr, 0)
    console.log(sum)
}