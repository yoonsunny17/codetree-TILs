const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = input

function findPerfectNumber(numb) {
    if (numb % 2 === 0) {
        return false
    } else if (numb % 10 === 5) {
        return false
    } else if (numb % 3 === 0 && numb % 9 !== 0) {
        return false
    }
    return true
}

function solution(a, b) {
    let cnt = 0;
    for (let i=a; i<=b; i++) {
        if (findPerfectNumber(i)) {
            cnt++
        }
    }

    return cnt
}

console.log(solution(a, b))