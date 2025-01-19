const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input.slice(1);

let cnt = 0;
let cntArr = [];
for (let i=0; i<n; i++) {
    if (i === 0 || numbs[i] === numbs[i-1]) {
        cnt++;
    } else if (numbs[i] !== numbs[i-1]) {
        cntArr.push(cnt);
        cnt = 1;
    }
}
cntArr.push(cnt);

console.log(Math.max(...cntArr));