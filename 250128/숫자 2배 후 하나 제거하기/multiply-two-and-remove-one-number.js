const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

let minVal = Number.MAX_SAFE_INTEGER;

// 하나의 숫자를 선택해 두배를 한다
for (let i=0; i<n; i++) {
    numbs[i] *= 2;

    // 숫자 하나를 제거한 후, 인접 원소간 차를 계산한다
    for (let j=0; j<n; j++) {
        let arr = [];
        for (let k=0; k<n; k++) {
            if (j === k) {
                continue;
            }
            arr.push(numbs[k]);
        }
        let cnt = 0;
        for (let l=0; l<n-2; l++) {
            cnt += Math.abs(arr[l] - arr[l+1]);
        }
        minVal = Math.min(minVal, cnt);
    }
    numbs[i] /= 2;
}

console.log(minVal);