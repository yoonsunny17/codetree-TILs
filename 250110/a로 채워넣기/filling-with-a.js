fs = require('fs')
str = fs.readFileSync(0).toString().trim()

let arr = str.split('')
arr[1] = arr[arr.length-2] = 'a'

console.log(arr.join(''))