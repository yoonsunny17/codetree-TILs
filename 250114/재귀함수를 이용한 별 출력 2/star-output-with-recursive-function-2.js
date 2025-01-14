const fs = require('fs')
const n = fs.readFileSync(0).toString().trim()

function solution(n) {
    if (n === 0) {
        return;
    }

    console.log('* '.repeat(n))
    solution(n-1)
    console.log('* '.repeat(n))
}

solution(n)