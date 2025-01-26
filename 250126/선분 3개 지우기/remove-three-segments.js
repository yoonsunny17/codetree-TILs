const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let rlt = 0;
// 제거할 선분 세개를 고른다
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        for (let k=j+1; k<n; k++) {

            let arr = Array(101).fill(0); // 0번부터 100번까지
            for (let l=0; l<n; l++) {
                // 제외 대상이면 건너뛴다
                if (l === i || l === j || l === k) {
                    continue;
                }

                let [a, b] = infos[l];
                for (let x=a; x<=b; x++) {
                    arr[x]++;
                }
            }

            let flag = true;
            for (let a of arr) {
                if (a > 1) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                rlt++;
            }
        }
    }
}

console.log(rlt);