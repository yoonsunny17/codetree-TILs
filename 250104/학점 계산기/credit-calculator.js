fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const scores = input[1].split(' ').map(Number)

let avg = ((scores.reduce((total, curr) => total += curr, 0)) / n).toFixed(1)
let grade = avg >= 4.0 ? 'Perfect' : avg >= 3.0 ? 'Good' : 'Poor'

console.log(avg)
console.log(grade)