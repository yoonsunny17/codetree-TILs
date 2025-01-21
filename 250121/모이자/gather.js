const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const people = input[1].split(' ').map(Number);

let minTotal = Infinity; // 최소 이동거리 구할 변수

for (let i=0; i<n; i++) {
    let baseIdx = i; // 모여야 하는 집
    let totalDist = 0; // 총 이동거리의 합

    for (let j=0; j<n; j++) {
        totalDist += people[j] * Math.abs(baseIdx-j)
    }
    
    minTotal = Math.min(minTotal, totalDist);
}

console.log(minTotal);