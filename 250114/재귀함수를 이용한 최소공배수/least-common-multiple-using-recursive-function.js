const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

function solution(arr, idx=0, currVal=1, rlt=1) {
    if (idx === n) {
        return rlt
    }

    if ((rlt % currVal === 0) && (rlt % arr[idx] === 0)) {
        return solution(arr, idx+1, rlt, rlt )
    } else {
        return solution(arr, idx, currVal, rlt+1)
    }
}

console.log(solution(numbs))
