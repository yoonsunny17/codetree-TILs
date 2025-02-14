const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [n, m] = input;

let rlt = [];
function chooseNumber(cnt) {
    if (cnt === m+1) {
        console.log(rlt.join(' '));
        return;
    }

    for (let i=1; i<=n; i++) {
        if (rlt.length === 0) {
            // 아직 비어있다면 넣어도 된다
            rlt.push(i);
            chooseNumber(cnt+1);
            rlt.pop();
        } else {
            // 비어있지 않다면, 배열의 마지막 원소보다 큰 값을 넣어야 한다
            if (i > rlt[rlt.length - 1]) {
                rlt.push(i);
                chooseNumber(cnt+1);
                rlt.pop();
            }
        }
    }
}

chooseNumber(1);