fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[0]
let purpose = input[1]

console.log(str.indexOf(purpose))