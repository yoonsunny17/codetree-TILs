const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [a, b] = input;

function haveNumber(n) {
    while (n > 0) {
        const digit = n % 10;
        if (digit === 3 || digit === 6 || digit === 9) {
            return true;
        }
        n = Math.floor(n/10)
    }

    return false
}

let cnt = 0;
for (let i=a; i<=b; i++) {
    if (haveNumber(i) || i%3 === 0) {
        cnt++
    }
}

console.log(cnt)