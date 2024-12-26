fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')
let [a, b] = input.map(Number)

let cnt = 1
for (let i=1; i<=b; i++) {
    if (i % a === 0) {
        cnt *= i
    }
}

console.log(cnt)