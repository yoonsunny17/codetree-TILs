function solution(str) {
    let check = [];
    for (let s of str) {
        if (check.includes(s)) continue;
        else check.push(s)
    }

    return check.length >= 2 ? true : false
}

const fs = require('fs')
const str = fs.readFileSync(0).toString().trim()

console.log(solution(str) ? 'Yes' : 'No')