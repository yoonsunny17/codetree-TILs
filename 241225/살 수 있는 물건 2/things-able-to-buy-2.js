fs = require('fs')
n = Number(fs.readFileSync(0).toString())

console.log(n < 500 ? 'no' : n < 1000 ? 'pen' : n < 3000 ? 'mask' : 'book')