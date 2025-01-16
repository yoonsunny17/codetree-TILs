const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let n = input[1]

let numb = 0;

// step1. a진수로 표현되어있는 n을 10진수로 변환
let arr1 = n.split('').map(Number);
for (let i=0; i<arr1.length; i++) {
    numb = numb * a + arr1[i];
}

// step2. 변환된 수를 b진수로 변환
let arr2 = [];
while (true) {
    if (numb < b) {
        arr2.push(numb);
        break;
    };

    arr2.push(numb%b)
    numb = Math.floor(numb/b)
}

console.log(arr2.reverse().join(''))