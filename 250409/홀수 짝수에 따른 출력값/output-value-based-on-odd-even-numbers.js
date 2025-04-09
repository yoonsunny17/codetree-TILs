const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const solution = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return solution(n-2) + n;
}

console.log(solution(n));