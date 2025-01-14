const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

numbs.sort((a, b) => b-a)

let arr = []
let totalCalc = numbs.reduce((total, curr) => total += curr, 0)

for (let i=0; i<2*n-1; i++) {
    let cnt = 0
    for (let j=i+1; j<2*n; j++) {
        cnt = numbs[i]+numbs[j]
        if (cnt > (totalCalc - cnt) / (n-1)) {
            arr.push(cnt)
        }
    }
}

console.log(Math.min(...arr))
