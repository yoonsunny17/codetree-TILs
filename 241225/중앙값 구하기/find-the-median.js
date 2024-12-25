fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')

let arr = input.map(Number)
arr.sort((a, b) => a - b)
console.log(arr[1])
