const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);

// 가능한 총 경우의 수
let totalCnt = n ** 3;

for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
        for (let k=1; k<=n; k++) {
            // 모든 자릿수에서 차이가 2보다 큰 경우 >> 총 경우의 수에서 빼준다
            if (Math.abs(a-i) > 2 && Math.abs(b-j) > 2 && Math.abs(c-k) > 2) {
                totalCnt--;
            }
        }
    }
}

console.log(totalCnt);