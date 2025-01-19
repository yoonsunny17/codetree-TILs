const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
let cnt = Array(n+1).fill(0);

// m개의 명령을 순차적으로 실행
let ans = -1;
for (let i=0; i<m; i++) {
    let command = Number(input[i+1]);

    cnt[command] += 1;

    if (cnt[command] === k) {
        ans = command;
        break;
    };
}

console.log(ans);