const fs = require('fs')
let commands = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let rlt = ''
for (let command of commands) {
    rlt += `${String.fromCharCode(command)} `
}

console.log(rlt)