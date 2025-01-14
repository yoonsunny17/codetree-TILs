const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

function solution(arr, idx=0, maxVal = -Infinity) {
    if (idx === arr.length) {
        return maxVal
    }

    maxVal = Math.max(maxVal, arr[idx])
    return solution(arr, idx+1, maxVal)
}

console.log(solution(numbs))