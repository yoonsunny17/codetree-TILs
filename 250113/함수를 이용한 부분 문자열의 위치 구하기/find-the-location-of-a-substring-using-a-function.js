function solution() {
    for (let i=0; i<=(a.length - b.length + 1); i++) {
        if (check(a.slice(i, i+b.length))) {
            return i
        }
    }

    return -1
}

function check(s) {
    for (let i=0; i<b.length; i++) {
        if (s[i] !== b[i]) {
            return false
        }
    }

    return true
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = input

console.log(solution())