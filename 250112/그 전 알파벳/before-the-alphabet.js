const fs = require('fs')
let s = fs.readFileSync(0).toString().trim()

console.log(s.charCodeAt(0) === 97 ? 'z' : String.fromCharCode(s.charCodeAt(0)-1))