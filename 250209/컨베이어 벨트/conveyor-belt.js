// 윗줄: (0, n-1)을 tmp1에 담고, 나머지 수들을 왼 -> 오 밀어준다
// 아랫줄: (1, 0)을 tmp2에 담고, 나머지 수들을 오 -> 왼 밀어준다
// tmp1을 (1, n-1)에 넣어주고, tmp2를 (0, 0)에 넣어준다

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const numbs = [];
numbs.push(input[1].split(' ').map(Number));
numbs.push(input[2].split(' ').map(Number).reverse());

let time = 0;
while (time !== t) {
    // 한바퀴 돌리고 1초 더한다
    let tmp_up = numbs[0][n-1]; // 윗줄은 가장 오른쪽 원소를 저장한다
    let tmp_down = numbs[1][0]; // 아랫줄은 가장 왼쪽 원소를 저장한다

    for (let i=n-1; i>0; i--) {
        numbs[0][i] = numbs[0][i-1]; // 윗줄을 왼 > 오 방향으로 한칸씩 밀어준다
    }
    for (let i=1; i<=n-1; i++) {
        numbs[1][i-1] = numbs[1][i]; // 아랫줄을 오 > 왼 방향으로 한칸씩 밀어준다
    }

    numbs[0][0] = tmp_down;
    numbs[1][n-1] = tmp_up;
    time++;
}

for (let i=0; i<2; i++) {
    if (i === 1) {
        console.log(numbs[i].reverse().join(' '));
    } else {
        console.log(numbs[i].join(' '));
    }
}