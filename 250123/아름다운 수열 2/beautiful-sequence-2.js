const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

// step1. 우선 b 수열을 정렬해준다
b.sort();

// step2. a 수열에서, 구간 m만큼씩 확인해본다
let cnt = 0;
for (let i=0; i<n-m+1; i++) {
    let tmp = [];
    for (let j=i; j<i+m; j++) {
        tmp.push(a[j]);
    }

    if (JSON.stringify(tmp.sort()) === JSON.stringify(b)) {
        cnt++;
    }
}

console.log(cnt);