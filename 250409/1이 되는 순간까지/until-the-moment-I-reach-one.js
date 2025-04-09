const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
const solution = (n) => {
    // 1이면 끝
    if (n === 1) {
        return;
    }

    if (n%2 === 0) {
        // 짝수면 2로 나눈 몫으로 갱신
        cnt++;
        return solution(parseInt(n/2));
    } else {
        // 홀수면 3으로 나눈 몫으로 갱신
        cnt++;
        return solution(parseInt(n/3));
    }
}

solution(n);
console.log(cnt);