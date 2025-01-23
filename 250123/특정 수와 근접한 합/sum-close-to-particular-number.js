const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

const totalCnt = numbs.reduce((total, curr) => total + curr, 0);
let rlt = Infinity;
for (let i=0; i<n-1; i++) {
    for (let j=i+1; j<n; j++) {
        let tmpCnt = totalCnt - numbs[i] - numbs[j];
        
        rlt = Math.min(rlt, Math.abs(s-tmpCnt));
    }
}

console.log(rlt);