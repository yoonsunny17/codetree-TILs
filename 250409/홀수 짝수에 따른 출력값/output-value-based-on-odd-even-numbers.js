const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
const solution = (n) => {
    if (n % 2 === 0) {
        for (let i=2; i<=n; i+=2) {
            cnt += i;
        }
    } else {
        for (let i=1; i<=n; i+=2) {
            cnt += i;
        }
    }
}

solution(n);
console.log(cnt);