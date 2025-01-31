const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const numbs = Array.from({length: n}, (_, i) => Number(input[i+1]));

let maxCnt = 0;
for (let i=0; i<n; i++) {
    // 주어진 숫자들 중, 하나를 선택해서 최솟값으로 지정한다
    let minNumb = numbs[i];

    // 최솟값 이상인 숫자들 중, 차가 k이하인 숫자들을 필터링한다
    let filteredArr = numbs.filter((val) => val >= minNumb && Math.abs(minNumb - val) <= k);

    maxCnt = Math.max(maxCnt, filteredArr.length);
}

console.log(maxCnt);