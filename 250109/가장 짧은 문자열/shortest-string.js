fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let strLength = Array(3).fill(0)
for (let i=0; i<3; i++) {
    let str = input[i]
    strLength[i] = str.length
}

console.log(Math.max(...strLength) - Math.min(...strLength))