const fs = require('fs')
let binary = fs.readFileSync(0).toString().trim().split('').map(Number)

let numb = 0;

for (let i = 0; i < binary.length; i++) {
    numb = numb * 2 + binary[i];
}

console.log(numb);