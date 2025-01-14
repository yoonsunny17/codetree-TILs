const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

function solution(n) {
    let rlt = []
    for (let i=n; i>=1; i--) {
        rlt.push(i)
    }

    for (let i=1; i<=n; i++) {
        rlt.push(i)
    }

    return rlt.join(' ')
}

console.log(solution(n))