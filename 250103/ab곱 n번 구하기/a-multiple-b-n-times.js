fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const n = input[0]

for (let i=1; i<=n; i++) {
    let [a, b] = input[i].split(' ').map(Number)

    let sum = 1
    for (let j=a; j<=b; j++) {
        sum *= j
    }
    console.log(sum)
}