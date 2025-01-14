const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

function solution1(n) {
    if (n === 0) {
        return;
    }

    process.stdout.write(n + ' ')
    solution1(n-1)
}

function solution2(curr, n) {
    if (curr > n) {
        process.stdout.write('\n')
        return;
    }

    process.stdout.write(curr + ' ')
    solution2(curr+1, n)
}

solution2(1, n)
solution1(n)