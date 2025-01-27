const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

let maxVal = 0;
let dict = {};
// 두 숫자를 고른다
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        let a = Math.min(numbs[i], numbs[j]);
        let b = Math.max(numbs[i], numbs[j]);

        // 두 숫자의 중간값(k)를 계산한다
        if ((a + b) % 2) {
            continue;
        }

        if (!dict[(parseInt((a + b) / 2))]) {
            dict[(parseInt((a + b) / 2))] = 1
        } else {
            dict[(parseInt((a + b) / 2))] += 1;
        }
    }
}

for (const val of Object.values(dict)) {
    maxVal = Math.max(maxVal, val);
}

console.log(maxVal);