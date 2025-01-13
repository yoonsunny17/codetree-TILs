const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let [a, o, c] = [Number(input[0]), input[1], Number(input[2])]

function solution(a, o, c) {
    if (o === '+') {
        return a+c
    } else if (o === '-') {
        return a-c
    } else if (o === '*') {
        return a*c
    } else if (o === '/') {
        return parseInt(a/c)
    } else return false
}

console.log(solution(a, o, c) === false ? 'False' : `${a} ${o} ${c} = ${solution(a, o, c)}`)