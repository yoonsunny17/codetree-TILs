const fs = require('fs')
let str = fs.readFileSync(0).toString().trim()

let rlt = ''
for (let s of str) {
    if (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90) {
        rlt += s
    } else if (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122) {
        rlt += s.toUpperCase()
    }
}

console.log(rlt)