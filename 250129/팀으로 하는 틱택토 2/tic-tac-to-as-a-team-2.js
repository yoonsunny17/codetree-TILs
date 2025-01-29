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

let twoNumberList = [];
checkArr.forEach((arr) => {
    // 두 개의 숫자로만 이루어져 있는 경우라면
    if (new Set(arr).size === 2) {
        // 가능한 상황이므로 배열에 담아주되, string화 시켜서 넣어준다 (중복 경우 체크를 위해)
        twoNumberList.push(arr.join(''));
    }
})

// 중복되는 경우를 제외하고 출력한다
console.log(new Set(twoNumberList).size);