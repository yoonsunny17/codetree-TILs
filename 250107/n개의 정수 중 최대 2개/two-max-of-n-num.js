fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

n = Number(input[0])
numbs = input[1].split(' ').map(Number)

numbs.sort((a, b) => b-a)

console.log(numbs[0], numbs[1])