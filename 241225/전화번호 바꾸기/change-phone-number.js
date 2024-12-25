fs = require('fs')
input = fs.readFileSync(0).toString()

let numbs = input.split('-')

console.log(`${numbs[0]}-${numbs[2]}-${numbs[1]}`)