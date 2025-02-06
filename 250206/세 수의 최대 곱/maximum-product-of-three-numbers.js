const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const numbs = input[0].split(' ').map(Number);

// 음수 세개 => 음수
// 음수 두개, 양수 하나 => 양수
// 음수 하나, 양수 두개 => 음수
// 양수 세개 => 양수

let maxVal = Number.MIN_SAFE_INTEGER;

// 세개의 숫자를 골라서 곱한 뒤, 최댓값을 갱신한다
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        for (let k=j+1; k<n; k++) {
            maxVal = Math.max(maxVal, numbs[i] * numbs[j] * numbs[k]);
        }
    }
}

console.log(maxVal);