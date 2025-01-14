const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

// 최대공약수 구하기
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a%b);
}

// 최소공배수 구하기
function lcm(a, b) {
    return (a*b) / gcd(a, b);
}

// 재귀함수
function solution(arr, idx=0, currLcm=1) {
    if (idx === arr.length) {
        return currLcm;
    }

    return solution(arr, idx+1, lcm(currLcm, arr[idx]))
}

console.log(solution(numbs));