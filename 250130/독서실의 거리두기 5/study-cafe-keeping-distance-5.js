const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let numbs = input[1].split('').map(Number);

const calcDistance = (numbs) => {
    // 1인 곳의 인덱스만 저장
    let indices = numbs.map((val, idx) => val === 1 ? idx : -1).filter(idx => idx !== -1);

    if (indices.length < 2) return 0; // 1이 하나면 거리 계산 불가

    // 각 인덱스끼리의 차(거리) 계산 후 최댓값 갱신
    let maxDistance = Number.MAX_SAFE_INTEGER;
    for (let i=1; i<indices.length; i++) {
        maxDistance = Math.min(maxDistance, indices[i] - indices[i-1]);
    }

    return maxDistance;
}

// 각 자리를 훑어본다
let maxDist = 0;
for (let i=0; i<n; i++) {
    if (numbs[i] === 1) {
        continue;
    } else {
        numbs[i] = 1; // 신입 자리에 앉아
        
        let dist = calcDistance(numbs);

        maxDist = Math.max(maxDist, dist); // 최솟값들 중 가장 최댓값으로 갱신
        numbs[i] = 0; // 다른 자리 줄게
    }
}

console.log(maxDist);