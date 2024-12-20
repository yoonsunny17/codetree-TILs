const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

rlt = []

for (let i=1; i<=input; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        rlt.push(1)
    } else rlt.push(0)
}

console.log(rlt.join(' '))