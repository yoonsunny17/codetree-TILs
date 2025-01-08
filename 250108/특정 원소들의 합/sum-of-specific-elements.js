fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let arr = []

for (let i=0; i<4; i++) {
    arr.push(input[i].split(' ').map(Number))
}

let sum = 0
for (let i=0; i<4; i++) {
    for (let j=0; j<=i; j++) {
        sum += arr[i][j]
    }
}

console.log(sum)