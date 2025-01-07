fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const numbs = input[1].split(' ').map(Number)

const rlt = []
let maxLength = n

while (true) {
    let [maxVal, maxIdx] = [-1, -1]

    for (let i=0; i<maxLength; i++) {
        if (numbs[i] > maxVal) {
            maxVal = numbs[i]
            maxIdx = i
        }
    }

    rlt.push(maxIdx+1)

    if (maxIdx === 0) break;

    maxLength = maxIdx
}

console.log(rlt.join(' '))