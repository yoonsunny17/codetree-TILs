const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);

let minCnt = Infinity;
for (let i=0; i<n-t+1; i++) {
    let cnt = 0;
    for (let j=i; j<i+t; j++) {
        cnt += Math.abs(h - heights[j]);
    }
    
    minCnt = Math.min(minCnt, cnt);
}

console.log(minCnt);