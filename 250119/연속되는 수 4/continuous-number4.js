const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input.slice(1).map(Number);

let cnt = 0;
let ans = 0;
for (let i=0; i<n; i++) {
    if (i >= 1 && numbs[i] > numbs[i-1]) {
        cnt++;
    } else {
        cnt = 1;
    }

    ans = Math.max(ans, cnt);
}

console.log(ans);