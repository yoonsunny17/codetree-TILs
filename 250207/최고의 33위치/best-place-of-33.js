const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const matrix = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let maxCnt = 0;
for (let i=0; i<=n-3; i++) {
    for (let j=0; j<=n-3; j++) {
        let cnt = 0
        for (let k=i; k<i+3; k++) {
            for (let l=j; l<j+3; l++) {
                if (matrix[k][l] === 1) {
                    cnt++;
                }
            }
        }

        maxCnt = Math.max(maxCnt, cnt);
    }
}

console.log(maxCnt);