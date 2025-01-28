const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

let minVal = 101;
// 가로선, 세로선을 하나씩 선택해서 확인한다
for (let x=2; x<=100; x+=2) {
    for (let y=2; y<=100; y+=2) {
        
        // 1사분면 (+, +)
        let cnt1 = 0;
        points.forEach(([a, b]) => {
            if (a > x && b > y) {
                cnt1++;
            }
        })

        // 2사분면 (-, +)
        let cnt2 = 0;
        points.forEach(([a, b]) => {
            if (a < x && b > y) {
                cnt2++;
            }
        })

        // 3사분면 (-, -)
        let cnt3 = 0;
        points.forEach(([a, b]) => {
            if (a < x && b < y) {
                cnt3++;
            }
        })

        // 4사분면 (+, -)
        let cnt4 = 0;
        points.forEach(([a, b]) => {
            if (a > x && b < y) {
                cnt4++;
            }
        })

        let tmpMaxCnt = Math.max(cnt1, cnt2, cnt3, cnt4);
        minVal = Math.min(minVal, tmpMaxCnt);
    }
}

console.log(minVal);