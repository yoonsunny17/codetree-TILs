const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const bombs = Array.from({length: n}, (_, i) => Number(input[i+1]));

let maxVal = -1;
// k개씩 끊어서 확인해본다
for (let i=0; i<n-k; i++) {
    let checkBombs = bombs.slice(i, i+k+1);
    checkBombs.sort((a, b) => a - b);

    if (checkBombs[k] === checkBombs[k-1]) {
        maxVal = Math.max(maxVal, checkBombs[k-1]);
    }
}

console.log(maxVal);