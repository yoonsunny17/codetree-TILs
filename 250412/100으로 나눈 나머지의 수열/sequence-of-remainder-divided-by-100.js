const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const solution = (n) => {
    if (n === 1) {
        return 2;
    }

    if (n === 2) {
        return 4;
    }

    return (solution(n-1) * solution(n-2)) % 100;
}

console.log(solution(n));
