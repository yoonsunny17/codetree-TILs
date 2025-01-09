fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let alpha = input[n+1]

let lengthSum = 0
let cnt = 0

for (let i=1; i<=n; i++) {
    if (input[i][0] === alpha) {
        let len = input[i].length
        lengthSum += len
        cnt++
    }
}

console.log(cnt, (lengthSum / cnt).toFixed(2))