fs = require('fs')
numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let rlt = 0;
numbs.forEach((v) => rlt += v)
console.log(rlt)