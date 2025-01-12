const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])

let sum = 0
for (let i=1; i<=n; i++) {
    let numb = Number(input[i])

    sum += numb
}

sum = String(sum)

console.log(sum.slice(1) + sum[0])