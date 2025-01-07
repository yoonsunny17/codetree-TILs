fs = require('fs')
input = fs.readFileSync(0).toString().split('\n')

const n = Number(input[0])
const numbs = input[1].split(' ').map(Number)

let minVal = Number.MAX_SAFE_INTEGER

for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        if (Math.abs(numbs[i]-numbs[j]) < minVal) {
            minVal = Math.abs(numbs[i]-numbs[j])
        }
    }
}

console.log(minVal)