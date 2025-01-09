fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

console.log(input[0].replace(/\s+/g, '') + input[1].replace(/\s+/g, ''))