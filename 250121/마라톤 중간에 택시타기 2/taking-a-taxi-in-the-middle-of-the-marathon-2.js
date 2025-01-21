const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
const points = input.map((v) => v.split(' ').map(Number));

let minDist = Infinity; // 최소 거리 받을 변수 초기화

// i번째 체크포인트 건너뛰기
for (let i=1; i<N-1; i++) {
    let prevIdx = 0; // 이전에 있었던 곳의 인덱스
    let cnt = 0; // 각 케이스마다 이동거리

    for (let j=1; j<N; j++) {
        if (j === i) continue; // 건너뛸 곳은 건너뛰기

        cnt += Math.abs(points[prevIdx][0] - points[j][0]) + Math.abs(points[prevIdx][1] - points[j][1]);
        prevIdx = j;
    }

    minDist = Math.min(minDist, cnt);
}

console.log(minDist);