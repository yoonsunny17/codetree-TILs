fs = require('fs')
str = fs.readFileSync(0).toString().trim()

let idx = str.indexOf('e')

console.log(str.slice(0, idx) + str.slice(idx+1))