const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let point = 1000; // 원점의 인덱스 초기화
let blackArr = Array(2000).fill(0); // 검정 체크 배열
let whiteArr = Array(2000).fill(0); // 흰색 체크 배열

let checkArr = Array(2000).fill(''); // 무슨 색으로 칠해졌는지 확인하는 배열

for (let i=0; i<n; i++) {
    let [x, command] = input[i+1].split(' ');

    // R인 경우 검정, L인 경우 흰색
    if (command === 'R') {
        for (let i=point; i<point+Number(x); i++) {
            blackArr[i]++
            checkArr[i] = 'B';
        }
        point = point + Number(x) - 1;
    } else {
        for (let i=point; i>point-Number(x); i--) {
            whiteArr[i]++
            checkArr[i] = 'W';
        }
        point = point - Number(x) + 1;
    }
}

let [white, black, gray] = [0, 0, 0];
for (let i=0; i<2000; i++) {
   if (blackArr[i] >= 2 && whiteArr[i] >= 2) {
    gray++;
   } else {
    if (checkArr[i] === 'W') {
        white++
    } else if (checkArr[i] === 'B') {
        black++
    }
   }
}

console.log(white, black, gray)