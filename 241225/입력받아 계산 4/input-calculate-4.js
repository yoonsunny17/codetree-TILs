fs = require('fs')
a = Number(fs.readFileSync(0).toString())

console.log(a * 2)