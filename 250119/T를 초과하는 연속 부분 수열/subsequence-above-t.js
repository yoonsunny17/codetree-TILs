const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

let cnt = 0;
let ans = 0;
for (let i=0; i<n; i++) {
    if (numbs[i] > t) {
        cnt++;
    } else {
        cnt = 0;
    }

    ans = Math.max(cnt, ans);
}

console.log(ans);