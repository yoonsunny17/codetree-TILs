const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

const isPossible = (numb) => {
    const availableIndices = [];
    numbs.forEach((val, idx) => {
        if (numb >= val) {
            availableIndices.push(idx);
        }
    })

    // 각 인덱스의 거리가 k 이하인지 확인
    for (let i=1; i<availableIndices.length; i++) {
        if (availableIndices[i] - availableIndices[i-1] > k) {
            return false;
        }
    }

    return true;
}

let minMax = 101; // 최댓값들 중 최솟값
for (let a=Math.max(...numbs); a>=Math.max(numbs[0], numbs[numbs.length-1]); a--) {
    // k 이내에 들어올 수 있다면, minMax 갱신해줘
    if (isPossible(a)) {
        minMax = Math.min(minMax, a);
    }
}

console.log(minMax);