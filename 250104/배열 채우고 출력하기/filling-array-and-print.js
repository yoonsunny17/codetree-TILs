fs = require('fs')
arr = fs.readFileSync(0).toString().trim().split(' ')

arr.reverse()

console.log(arr.join(''))