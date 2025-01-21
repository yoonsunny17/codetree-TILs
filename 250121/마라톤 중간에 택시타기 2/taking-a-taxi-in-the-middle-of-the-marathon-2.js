const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
let points = input.map((v) => v.split(' ').map(Number));

let skipIdx = 1; // 건너 뛸 지점 인덱스
let [sr, sc] = points[0]; // 출발 위치 초기화
let minDist = Infinity; // 최소 거리 받을 변수 초기화

// 맨 끝 지점 전까지 확인해보기
while (skipIdx < N-1) {
    let cnt = 0;
    for (let i=1; i<N; i++) {
        if (i === skipIdx) {
            continue;
        } else {
            cnt += Math.abs(sr-points[i][0]) + Math.abs(sc-points[i][1]);
            sr = points[i][0], sc = points[i][1];
        }
    }

    minDist = Math.min(minDist, cnt);

    skipIdx++;
    sr = 0, sc = 0;
}

console.log(minDist);