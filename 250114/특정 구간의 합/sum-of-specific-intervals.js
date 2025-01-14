const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

for (let i=0; i<m; i++) {
    let [a1, a2] = input[i+2].split(' ').map(Number)

    let cnt = arr.slice(a1-1, a2).reduce((total, curr) => total += curr, 0)
    console.log (cnt)
}