const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

let cnt = 0;
for (let i=0; i<n; i++) {
    for (let j=i; j<n; j++) {
        let sumVal = 0;
        for (let k=i; k<j+1; k++) {
            sumVal += numbs[k];
        }
        
        let avg = sumVal / (j-i+1);

        // 방금 확인한 구간 내에 avg랑 동일한 숫자가 있으면 cnt 해줘! (전체 구간 아님)
        let flag = false;
        for (let k=i; k<j+1; k++) {
            if (numbs[k] === avg) {
                flag = true;
            }
        }

        if (flag) cnt++;
    }
}

console.log(cnt);
