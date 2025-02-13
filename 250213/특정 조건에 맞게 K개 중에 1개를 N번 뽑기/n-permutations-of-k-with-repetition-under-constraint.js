const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [k, n] = input;

const numbs = [];

const chooseNumber = (cnt) => {
    if (cnt === n+1) {
        console.log(numbs.join(' '));
        return;
    }

    // 만약 전, 전전 숫자와 동일하지 않은 경우라면 넣을 수 없다
    for (let i=1; i<=k; i++) {
        if (i === numbs[numbs.length-1] && i === numbs[numbs.length-2]) {
            continue;
        } else {
            numbs.push(i);
            chooseNumber(cnt+1);
            numbs.pop();
        }
    }
}

chooseNumber(1);