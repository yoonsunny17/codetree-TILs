const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seats = input[1].split('').map(Number);

// 각 경우마다 거리두기의 최댓값을 구해본다
const calcDist = (seats) => {
    // 좌석이 차 있는 자리들의 인덱스만 추출한다
    let indices = seats.map((val, idx) => val === 1 ? idx : -1).filter((val) => val > -1);

    let dist = 100;
    for (let i=1; i<indices.length; i++) {
        dist = Math.min(dist, indices[i] - indices[i-1]);
    }
    return dist;
}

let maxVal = 0;
// 두 사람을 비어있는 좌석들 중 앉힌다 (순서는 상관없음)
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        if (seats[i] === 0 && seats[j] === 0) {
            // 앉아
            seats[i] = 1;
            seats[j] = 1;

            // 거리두기의 최댓값을 갱신한다
            maxVal = Math.max(maxVal, calcDist(seats));            

            // 일어나
            seats[i] = 0;
            seats[j] = 0;
        }
    }
}

console.log(maxVal);