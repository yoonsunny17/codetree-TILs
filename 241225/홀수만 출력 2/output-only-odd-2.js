fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')

let [b, a] = input.map(Number)

const arr = Array.from({length: b - a + 1}, (_, i) => a+i).filter(v => v%2 !== 0).sort((a, b) => b - a)

console.log(arr.join(' '))