fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

let arr = Array(9).fill(0)

for (let i=0; i<n; i++) {
    arr[numbs[i]-1]++
}

console.log(arr.join('\n'))