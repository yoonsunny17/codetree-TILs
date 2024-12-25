fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')

let [a, b] = input.map(Number)

const arr = Array.from({length: b-a+1}, (_, i) => a+i).filter(v => v% 2 !== 0)

console.log(arr.join(' '))