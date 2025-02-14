const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);
numbs.sort((a, b) => a - b); // 오름차순 정렬

let maxVal = 0;
let selected = []; // m개의 숫자 선택해서 넣을 리스트

// 선택한 수열에 대해, xor 연산을 해본다
function calcXOR(selected) {
    return selected.reduce((acc, curr) => acc ^ Number(curr.toString(2)), 0);
}

// m개의 숫자를 선택한다
function chooseNumber(cnt) {
    if (cnt === m + 1) {
        // m개의 숫자를 모두 선택했다면, xor 계산 한다
        maxVal = Math.max(maxVal, parseInt(calcXOR(selected), 2));
    }

    for (let i=0; i<n; i++) {
        // 아직 선택한 숫자가 없다면 그냥 넣어도 된다
        if (selected.length === 0) {
            selected.push(numbs[i]);
            chooseNumber(cnt+1);
            selected.pop();
        } else {
            // 선택한 숫자가 있으면, 그 숫자보다 큰 숫자부터 넣을 수 있다
            if (numbs[i] > selected[selected.length - 1]) {
                selected.push(numbs[i]);
                chooseNumber(cnt+1);
                selected.pop();
            }
        }
    }
}

chooseNumber(1);
console.log(maxVal);