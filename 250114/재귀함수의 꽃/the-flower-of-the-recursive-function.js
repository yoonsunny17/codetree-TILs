const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

function solution(n) {
    if (n === 0) {
        return;
    }

    process.stdout.write(n + ' ');
    solution(n-1);
    process.stdout.write(n + ' ');
}

solution(n)