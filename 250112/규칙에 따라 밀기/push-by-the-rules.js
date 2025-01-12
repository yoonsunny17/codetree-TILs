const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let a = input[0]
let commands = input[1].split('')

for (let command of commands) {
    if (command === 'L') {
        a = a.slice(1) + a[0]
    } else {
        a = a[a.length-1] + a.slice(0, a.length-1)
    }
}

console.log(a)