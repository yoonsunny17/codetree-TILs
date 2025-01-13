function solution(n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += i
    }

    return parseInt(sum / 10)
}

const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

console.log(solution(n))