const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b, c] = input;

let d = a * b * c; // 세 수를 곱한 값

const solution = (n) => {
    // 일의 자리의 수라면 끝 (종료조건)
    if (n < 10) {
        return n
    }

    return solution(parseInt(n / 10)) + (n % 10);
}

console.log(solution(d));