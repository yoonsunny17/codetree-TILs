const fs = require('fs')
const n = fs.readFileSync(0).toString().trim()

function solution(n) {
    const arr = n.split('');
    let cnt = arr.reduce((total, curr) => total += Number(curr), 0)

    if (Number(n) % 2 === 0 && cnt >= 5) {
        return "Yes"
    } else {
        return "No"
    }
}

console.log(solution(n))
