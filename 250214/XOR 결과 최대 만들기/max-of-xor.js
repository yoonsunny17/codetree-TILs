const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);
numbs.sort((a, b) => a - b);

let maxVal = 0;
let rlt = [];

const calcBit = (rlt) => {
    // 각 숫자를 이진법으로 변환해서 xor 연산을 수행한다
    const calc = rlt.reduce((acc, curr) => acc ^ curr.toString(2), 0);
    return calc
}

function chooseNumber(cnt) {
    if (cnt === m+1) {
        // 선택한 수열에 대해 xor연산 진행한다
        maxVal = Math.max(maxVal, calcBit(rlt));
        return;
    }

    for (let i=0; i<n; i++) {
        if (rlt.length === 0) {
            // 아직 비어있다면 넣어도 된다
            rlt.push(numbs[i]);
            chooseNumber(cnt+1);
            rlt.pop();
        } else {
            // 비어있지 않다면, 배열의 마지막 원소보다 큰 값을 넣어야 한다
            if (i > rlt[rlt.length - 1]) {
                rlt.push(numbs[i]);
                chooseNumber(cnt+1);
                rlt.pop();
            }
        }
    }
}

chooseNumber(1);
console.log(parseInt(maxVal, 2));