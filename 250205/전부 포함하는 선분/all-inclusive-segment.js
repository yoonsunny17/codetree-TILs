// 하나씩 제거한다
// 남은 선분들 중, x의 최솟값과 최댓값을 구해서 두 값의 차를 구한다
// 선분 길이의 최솟값을 갱신한다

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = input.shift();
const lines = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let minDist = 100;
for (let i=0; i<n; i++) {
    let minX = 101, maxX = 0;
    for (let j=0; j<n; j++) {
        if (j === i) {
            continue;
        }

        minX = Math.min(minX, lines[j][0]);
        maxX = Math.max(maxX, lines[j][1]);
    }

    minDist = Math.min(minDist, Math.abs(maxX - minX));
}

console.log(minDist);