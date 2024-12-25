fs = require('fs')
n = Number(fs.readFileSync(0).toString())

console.log(n < 1000 ? 'no' : n < 3000 ? 'mask' : 'book')