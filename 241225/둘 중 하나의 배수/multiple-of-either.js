fs = require('fs')
a = Number(fs.readFileSync(0).toString())

console.log((a%3) === 0 || (a%5) === 0 ? 1 : 0)