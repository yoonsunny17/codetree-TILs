const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim())

function solution(n) {
    if (n % 100 === 0 && n % 400 !== 0) {
        return false
    }

    if (n % 4 !== 0) {
        return false
    }

    return true
}

console.log(solution(n))