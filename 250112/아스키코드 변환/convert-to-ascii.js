const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let a = input[0]
let b = Number(input[1])

console.log(a.charCodeAt(0), String.fromCharCode(b))