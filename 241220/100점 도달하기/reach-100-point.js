const fs = require('fs')
let score = Number(fs.readFileSync(0).toString().trim())

let rlt = []

for (let i=score; i<=100; i++) {
    if (i >= 90) {
        rlt.push('A')
    } else if (i >= 80) {
        rlt.push('B')
    } else if (i >= 70) {
        rlt.push('C')
    } else if (i >= 60) {
        rlt.push('D')
    } else rlt.push('F')
}

console.log(rlt.join(' '))