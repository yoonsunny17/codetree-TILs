const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const questions = Array.from({length: N}, (_, i) => input[i+1].split(' ').map(Number));

let rlt = 0; // 가능한 경우의 수

// 숫자 a에 대해, 주어진 질문들과 모두 일치하는지 확인한다
const check = (numb_a) => {
    let checkCnt = 0;

    for (let q of questions) {
        let [numb, o, x] = q;

        let numb_b = String(numb).split('').map(Number);

        let cnt_o = 0, cnt_x = 0; // 하나씩 확인해본다
        for (let i=0; i<3; i++) {
            if (numb_a.includes(numb_b[i]) && numb_b[i] === numb_a[i]) {
                cnt_o++;
            } else if (numb_a.includes(numb_b[i]) && numb_b[i] !== numb_a[i]) {
                cnt_x++;
            }
        }

        if (o === cnt_o && x === cnt_x) {
            checkCnt++;
        }
    }

    // 모든 질문들과 동일한 조건인 숫자인지 확인한다
    return checkCnt === N ? true : false;
}

// A의 숫자가 될 수 있는 모든 경우의 수를 생각해본다
for (let i=1; i<=9; i++) {
    for (let j=1; j<=9; j++) {
        for (let k=1; k<=9; k++) {
            // 서로 다른 세 개의 숫자로 이루어져야 한다
            if (i === j && j === k && k === i) {
                continue;
            } else if (i === j || j === k || k === i) {
                continue;
            }
            
            let numb_a = [i, j, k];
            // 각 경우의 수마다, B가 질문한 모든 조건들에 부합하는 숫자인지 체크한다
            if (check(numb_a)) rlt++;
        }
    }
}

console.log(rlt);

