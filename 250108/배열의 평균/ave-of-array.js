fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let arr = [];

let rlt1 = [];
let rlt2 = [];
let rlt3 = 0;

for (let i=0; i<2; i++) {
    arr.push(input[i].split(' ').map(Number))
}

let totalSum = 0;
for (let i=0; i<2; i++) {
    rlt1.push((arr[i].reduce((total, curr) => total += curr, 0) / 4).toFixed(1))

    for (let j=0; j<4; j++) {
        totalSum += arr[i][j]
    }
}

for (let j=0; j<4; j++) {
    let sum = 0;
    for (let i=0; i<2; i++) {
        sum += arr[i][j]
    }
    rlt2.push((sum / 2).toFixed(1))
}

rlt3 = (totalSum / 8).toFixed(1)

console.log(rlt1.join(' '))
console.log(rlt2.join(' '))
console.log(rlt3)