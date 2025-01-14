const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let a = input[1].split(' ').map(Number)
let b = input[2].split(' ').map(Number)

function solution() {
    for (let i=0; i<n; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

a.sort((a, b) => a - b)
b.sort((a, b) => a - b)

console.log(solution() ? 'Yes' : 'No')