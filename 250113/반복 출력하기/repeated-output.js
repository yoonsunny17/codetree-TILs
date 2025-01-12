const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

function solution(n) {
    for (let i=0; i<n; i++) {
        process.stdout.write('12345^&*()_\n')
    }
}

solution(n)