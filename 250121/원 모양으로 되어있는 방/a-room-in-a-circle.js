const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input.shift());
let numbs = Array.from({length: n}, (_, i) => Number(input[i]));

let minDist = Infinity; // 최소거리 구할 변수

// i번째 방에서 시작
for (let i=0; i<n; i++) {
    let cnt = 0; // 각 경우 이동거리 계산

    for (let j=0; j<n; j++) {
        if (j === i) {
            // 시작 방과 같은 번호면 이동하지 않아도 된다
            continue;
        } else if (j > i) {
            // 시작 방 번호보다 큰 경우
            cnt += (j - i) * numbs[j];
        } else {
            // 시작 방 번호보다 작은 경우
            cnt += ((n - i) + j) * numbs[j];

        }
    }

    minDist = Math.min(minDist, cnt);
}
console.log(minDist);