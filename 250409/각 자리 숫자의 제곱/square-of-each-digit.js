const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const solution = (n) => {
    if (n < 10) {
        return n**2;
    }

    return solution(parseInt(n/10)) + (n%10)**2;
}

console.log(solution(n));