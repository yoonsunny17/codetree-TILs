const fs = require('fs')
let s = fs.readFileSync(0).toString().trim()

console.log(s.charCodeAt() === 122 ? 'a' : String.fromCharCode(s.charCodeAt()+1))