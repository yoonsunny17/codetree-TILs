fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ').map(Number)
let [a, b] = input

let arr = Array(10).fill(0)
arr[0] = a
arr[1] = b

for (let i=2; i<10; i++) {
    arr[i] = arr[i-1] + 2 * arr[i-2]
}

console.log(arr.join(' '))