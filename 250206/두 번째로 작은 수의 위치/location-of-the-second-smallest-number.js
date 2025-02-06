const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

// set을 써서 중복되지 않도록 만든다
let numbSet = new Set(numbs);

// 만약 set에 숫자 하나만 들어있다면 -1 출력하고 끝
if (numbSet.size === 1) {
    console.log(-1);
    return;
}

// 오름차순으로 정렬한다
let numbList = [...numbSet].sort((a, b) => a - b);

// 두번째로 작은 숫자를 찾아준다
let secondMinNumb = numbList[1];

// 두번째로 작은 숫자가 있는 위치들을 찾아본다
let idxArr = [];
for (let i=0; i<n; i++) {
    if (numbs[i] === secondMinNumb) {
        idxArr.push(i);
    }
}

console.log(idxArr.length > 1 ? -1 : idxArr[0]+1);