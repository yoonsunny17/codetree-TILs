const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let arr = Array(101).fill(0)
for (let i=0; i<n; i++) {
    let [a, b] = input[i+1].split(' ').map(Number);

    for (let j=a; j<=b; j++) {
        arr[j]++
    }
};

console.log(Math.max(...arr))