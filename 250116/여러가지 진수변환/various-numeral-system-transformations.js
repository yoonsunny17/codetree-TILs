const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [n, b] = input;

let binary = [];
while (true) {
    if (n < b) {
        binary.push(n);
        break;
    };

    binary.push(n % b);
    n = Math.floor(n / b);
};

console.log(binary.reverse().join(''))