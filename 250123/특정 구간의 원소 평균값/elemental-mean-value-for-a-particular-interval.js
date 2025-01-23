const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

let cntArr = [];
let cnt = 0;
for (let i=0; i<n; i++) {
    for (let j=i; j<n; j++) {
        let sumVal = 0;
        for (let k=i; k<j+1; k++) {
            sumVal += numbs[k];
        }
        
        if (numbs.includes(sumVal / (j-i+1))) {
            cnt++;
        }
    }
}

console.log(cnt);