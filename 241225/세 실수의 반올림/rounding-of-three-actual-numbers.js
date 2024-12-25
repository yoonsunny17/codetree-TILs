fs = require('fs')
input = fs.readFileSync(0).toString().split('\n')

console.log(`${Number(input[0]).toFixed(3)} 
${Number(input[1]).toFixed(3)} 
${Number(input[2]).toFixed(3)}`)