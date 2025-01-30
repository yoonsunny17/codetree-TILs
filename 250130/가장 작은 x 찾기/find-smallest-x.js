
// 범위 체크할 때, 범위를 벗어나면 바로 끝내고 다음 숫자를 탐색한다

// n개의 조건을 모두 만족하는 숫자들 중, 최솟값을 구한다

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
            flag = false;
        }
        
        // if (!flag) {
        //     console.log(i, x, info)
        
    }
    if (flag) {
        console.log(i);
        return;
    }
}