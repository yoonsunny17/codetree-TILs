function solution(a, b) {
    let minVal = Math.min(a, b);
    let maxVal = Math.max(a, b);

    minVal += 10
    maxVal *= 2

    return [minVal, maxVal]
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

let [a, b] = input.map(Number)

let [minVal, maxVal] = solution(a, b)

console.log(minVal, maxVal)