fs = require('fs')
input = Number(fs.readFileSync(0).toString())

let a = 0

while (a < input) {
    console.log('*')
    a++
}