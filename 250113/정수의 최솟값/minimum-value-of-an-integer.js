function solution(a, b, c) {
    return Math.min(a, b, c)
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [a, b, c] = input

console.log(solution(a, b, c))