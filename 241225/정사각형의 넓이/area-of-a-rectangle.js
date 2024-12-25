fs = require('fs')
input = fs.readFileSync(0).toString()

let n = Number(input)

console.log(n**2)
if (n < 5) {
    console.log('tiny')
}