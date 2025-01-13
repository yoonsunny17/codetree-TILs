const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b] = input;

function isPrime(n) {
    for (let i=2; i<n; i++) {
        if (n%i === 0) {
            return false
        }
    }

    return true
}

function solution(a, b) {
    let sum = 0;
    for (let i=a; i<=b; i++) {
        if (i === 1) continue;
        if (isPrime(i)) sum += i;
    }

    return sum
}

console.log(solution(a, b))