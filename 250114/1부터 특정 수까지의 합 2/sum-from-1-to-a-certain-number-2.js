const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

function solution(n) {
    if (n === 1) {
        return 1
    }

    return solution(n - 1) + n
}

console.log(solution(n))