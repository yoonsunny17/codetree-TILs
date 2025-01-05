fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = input

let arr = Array(10).fill(0)

while (a > 1) {
    arr[a%b]++
    a = Math.floor(a/b)
}

let rlt = 0
for (let i=0; i<arr.length; i++) {
    if (arr[i] !== 0) {
        rlt += arr[i]**2
    }
}

console.log(rlt)