const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const heights = Array.from({length: n}, (_, i) => Number(input[i+1]));

const INT_MAX = Number.MAX_SAFE_INTEGER;
const MAX_H = 100;
const k = 17;

let ans = INT_MAX;
for (let i=0; i<MAX_H; i++) {
    // [i, i+k]에서 언덕을 깎는 비용을 계산해본다
    // i+k보다 높은 언덕은 높이가 i+k가 되도록 깎고,
    // i보다 낮은 언덕은 높이가 i가 되도록 쌓는다

    let cost = 0;
    for (let j=0; j<n; j++) {
        if (heights[j] < i) {
            cost += (heights[j] - i) ** 2;
        } else if (heights[j] > i+k) {
            cost += (heights[j] - i - k) ** 2;
        }
    }

    ans = Math.min(ans, cost);
}

console.log(ans);