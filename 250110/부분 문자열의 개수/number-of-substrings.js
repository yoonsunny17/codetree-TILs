fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let a = input[0]
let b = input[1]

let cnt = 0
for (let i=0; i<a.length; i++) {
    if (a.slice(i, i+b.length) === b) cnt++
}

console.log(cnt)