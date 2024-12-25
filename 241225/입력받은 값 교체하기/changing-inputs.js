fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')
let [a, b] = [input[0], input[1]];
[a, b] = [b, a]

console.log(a, b)