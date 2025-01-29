const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 평탄화 배열을 생성한다
const numbs = input.flatMap((v) => v.split('').map(Number));

// 가로, 세로, 대각선으로 확인한다
const checkCases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let checkArr = [];
for (let checkCase of checkCases) {
    let [a, b, c] = checkCase;
    checkArr.push([numbs[a], numbs[b], numbs[c]]);
}

// set으로 만들었을 때, set의 크기가 2이면 가능
let cnt = 0
checkArr.forEach((arr) => {
    if (new Set(arr).size === 2) {
        cnt++;
    }
})

console.log(cnt);