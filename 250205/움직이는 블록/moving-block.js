// 한 위치에 놓여져야 할 블럭의 갯수보다 많은 블럭의 개수

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = input.shift();
const blocks = Array.from({length: n}, (_, i) => Number(input[i]));

const avg = Math.floor(blocks.reduce((total, curr) => total + curr, 0) / n);

let cnt = 0;
for (let block of blocks) {
    if (block > avg) {
        cnt += (block - avg);
    }
}
console.log(cnt);
