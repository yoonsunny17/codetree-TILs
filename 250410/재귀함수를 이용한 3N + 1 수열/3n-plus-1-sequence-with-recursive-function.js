const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
const solution = (n) => {
    if (n === 1) {
        return;
    }

    if (n % 2 === 0) {
        cnt++;
        solution(parseInt(n / 2));
    } else {
        cnt++;
        solution(n * 3 + 1);
    }
}

solution(n);
console.log(cnt);