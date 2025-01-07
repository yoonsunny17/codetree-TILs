fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

n = Number(input[0])
numbs = input[1].split(' ').map(Number)

const INT_MAX = Number.MAX_SAFE_INTEGER

let [minVal, cnt] = [INT_MAX, 0]
for (let i=0; i<n; i++) {
    if (minVal > numbs[i]) {
        minVal = numbs[i]
        cnt = 1
    } else if (minVal === numbs[i]) cnt++
    else continue
}

console.log(minVal, cnt)