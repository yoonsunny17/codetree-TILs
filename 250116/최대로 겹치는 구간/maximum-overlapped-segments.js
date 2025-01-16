const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let OFFSET = 100;
let arr = Array(200).fill(0);

for (let i=0; i<n; i++) {
    let [x1, x2] = input[i+1].split(' ').map(Number);
    x1 += OFFSET;
    x2 += OFFSET;

    for (let j=x1; j<x2; j++) {
        arr[j]++
    }
};


console.log(Math.max(...arr))