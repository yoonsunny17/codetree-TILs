const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K, P, T] = input[0].split(' ').map(Number);
const handshakes = input.slice(1).map(line => line.trim().split(' ').map(Number));

// t 순서대로 정렬
handshakes.sort((a, b) => a[0] - b[0]);

// 초기 상태 설정
const isInfected = Array(N+1).fill(false);
const handShakeCounts = Array(N+1).fill(0);
isInfected[P] = true; // 초기 감염자 체크

// t 순서대로 악수 처리
handshakes.forEach(([t, x, y]) => {
    const xInfected = isInfected[x];
    const yInfected = isInfected[y];

    if (xInfected && yInfected) {
        // 둘 다 감염된 경우 >> 악수 횟수만 갱신
        handShakeCounts[x]++;
        handShakeCounts[y]++;
    } else if (xInfected && handShakeCounts[x] < K) {
        // x만 감염되었고, 악수 횟수가 K미만인 경우
        isInfected[y] = true;
        handShakeCounts[x]++;
    } else if (yInfected && handShakeCounts[y] < K) {
        // y만 감염되었고, 악수 횟수가 K미만인 경우
        isInfected[x] = true;
        handShakeCounts[y]++;
    } else {
        // 둘 다 감염되지 않은 경우 >> skip
    }
})

let rlt = isInfected.slice(1).map((v) => v ? 1 : 0);

console.log(rlt.join(''));