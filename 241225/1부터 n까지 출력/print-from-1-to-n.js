fs = require('fs')
n = Number(fs.readFileSync(0).toString())

const arr = Array.from({length: n}, (_, i) => i+1)
console.log(arr.join(' '))