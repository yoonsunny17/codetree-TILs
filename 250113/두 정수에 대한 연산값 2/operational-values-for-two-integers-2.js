function solution(a, b) {
    if (a < b) {
        a += 10
        b *= 2
    } else {
        a *= 2
        b += 10
    }

    let rlt = `${a} ${b}`
    return rlt
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

let [a, b] = input.map(Number)

console.log(solution(a, b))