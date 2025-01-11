fs = require('fs')
s = fs.readFileSync(0).toString().trim()

console.log(s.slice(1)+s[0])