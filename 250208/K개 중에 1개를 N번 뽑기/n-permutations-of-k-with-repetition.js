const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [k, n] = input;
let ans = [];
function chooseNumber(currNumb) {
    // 종료조건: n개의 숫자를 모두 골랐을 때
    if (currNumb === n+1) {
        console.log(ans.join(' '));
        return;
    }

    // 재귀 조건
    // 1부터 k까지의 숫자를 골라가면서 재귀 호출
    for (let i=1; i<=k; i++) {
        ans.push(i);
        chooseNumber(currNumb + 1);
        ans.pop();
    }

    return;
}

chooseNumber(1);