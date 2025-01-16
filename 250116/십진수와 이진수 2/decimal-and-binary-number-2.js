const fs = require('fs');
const n = fs.readFileSync(0).toString().trim();

const binary = n.split('').map(Number);
let numb = 0;

// step1. 이진수를 십진수로
for (let i=0; i<binary.length; i++) {
    numb = numb * 2 + binary[i];
}

// step2. 17배 한 후 다시 이진수로
numb *= 17;

let binaryNumber = [];
while (true) {
    if (numb < 2) {
        binaryNumber.push(numb);
        break;
    }

    binaryNumber.push(numb % 2)
    numb = Math.floor(numb / 2)
}

console.log(binaryNumber.reverse().join(''))