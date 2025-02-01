const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

let arr = Array(101).fill(0);
for (let info of infos) {
    let [a, b] = info;

    for (let i=a; i<=b; i++) {
        arr[i]++;
    }
}

console.log(arr.indexOf(n) === -1 ? "No" : "Yes");