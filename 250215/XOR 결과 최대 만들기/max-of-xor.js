const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

let maxVal = 0;
let selected = []; // m개의 숫자를 선택한 리스트

// xor 연산 수행
function calcXOR(selected) {
    return selected.reduce((acc, curr) => acc ^ curr, 0);
}

// m개의 숫자를 선택하기
function chooseNumber(idx, cnt) {
    if (cnt === m) {
        // m개를 선택했을 때 > 최댓값 갱신한다
        maxVal = Math.max(maxVal, calcXOR(selected));
        return;
    }

    // 현재 인덱스부터 하나씩 탐색 진행한다
    for (let i=idx; i<n; i++) {
        selected.push(numbs[i]);
        chooseNumber(i+1, cnt+1);
        selected.pop();
    }
}

chooseNumber(0, 0);
console.log(maxVal);