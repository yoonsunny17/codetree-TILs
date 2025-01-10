fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

let str = numbs.join('')

for (let i=0; i<str.length; i++) {
    console.log(str.slice(i*5, i*5+5))
}