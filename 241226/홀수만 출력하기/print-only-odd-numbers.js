fs = require('fs')
input = fs.readFileSync(0).toString().split('\n')
let N = Number(input[0])
let arr = input.slice(1, N+1).map(Number)

for (i of arr) {
    if (i % 3 === 0) {
        console.log(i)
    }
}
