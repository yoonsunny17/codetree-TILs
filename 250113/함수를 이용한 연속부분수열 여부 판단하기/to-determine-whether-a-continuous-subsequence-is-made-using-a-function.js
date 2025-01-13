function solution(a, b, arr1, arr2) {
    for (let i=0; i<a-b+1; i++) {
        let str = arr1.slice(i, i+b)

        if (JSON.stringify(str.join('')) === JSON.stringify(arr2.join(''))) {
            return true
        }
    }

    return false
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let arr1 = input[1].split(' ');
let arr2 = input[2].split(' ');

console.log(solution(a, b, arr1, arr2) ? 'Yes' : 'No')