const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

const maxX = 10;

let ans = 0;

// 모든 직선에 대해 시도해본다
for (let i=0; i<=maxX; i++) {
    for (let j=0; j<=maxX; j++) {
        for (let k=0; k<=maxX; k++) {

            // case 1. x축 평행 직선 3개
            let flag = true;
            infos.forEach(([x, y]) => {
                // 해당 직선이 점과 만나면 넘어간다
                if (x === i || x === j || x === k) {
                    return;
                }

                flag = false;
            })
            if (flag) {
                ans = 1;
            }

            // case 2. x축 평행 직선 2개 + y축 평행 직선 1개
            flag = true;
            infos.forEach(([x, y]) => {
                // 해당 직선이 점과 만나면 넘어간다
                if (x === i || x === j || y === k) {
                    return;
                }

                flag = false;
            })
            if (flag) {
                ans = 1;
            }

            // case 3. x축 평행 직선 1개 + y축 평행 직선 2개
            flag = true;
            infos.forEach(([x, y]) => {
                // 해당 직선이 점과 만나면 넘어간다
                if (x === i || y === j || y === k) {
                    return;
                }

                flag = false;
            })
            if (flag) {
                ans = 1;
            }

            // case 4. y축 평행 직선 3개
            flag = true;
            infos.forEach(([x, y]) => {
                // 해당 직선이 점과 만나면 넘어간다
                if (y === i || y === j || y === k) {
                    return;
                }

                flag = false;
            })
            if (flag) {
                ans = 1;
            }
        }
    }
}

console.log(ans);