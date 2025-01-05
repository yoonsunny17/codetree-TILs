fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = input

let arr = Array(500).fill(0)

while (a > 1) {
    a = Math.floor(a / b)
    arr[a%b]++
}

let rlt = 0
for (let i=0; i<500; i++) {
    if (arr[i] !== 0) {
        rlt += arr[i]**2
    }
}

console.log(rlt)