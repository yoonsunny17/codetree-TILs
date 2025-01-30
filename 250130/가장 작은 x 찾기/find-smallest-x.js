const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

// 1부터 10000까지 완탐
for (let i=1; i<=10000; i++) {
    let x = i;
    let flag = true;
    for (let info of infos) {
        const [a, b] = info;
        x *= 2;

        if (a <= x && x <= b) {
            continue;
        } else {
            // 범위를 벗어난 경우 체크해준다
            flag = false;
        }
    }

    if (flag) {
        // 작은 숫자부터 체크하고 있으므로, 숫자 x를 찾았다면 끝내도 된다
        console.log(i);
        return;
    }
}