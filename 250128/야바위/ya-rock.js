const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

let maxScore = 0;
// 1번부터 3번까지의 컵에 한번씩 조약돌을 넣어본다
for (let i=1; i<=3; i++) {
    let cups = Array(4).fill(0);
    cups[i] = 1;

    // 돌을 넣고, n번의 행동을 반복하면서 점수를 계산한다
    let score = 0;
    for (let info of infos) {
        let [a, b, c] = info;
        
        let tmp = cups[a];
        cups[a] = cups[b];
        cups[b] = tmp;

        // 선택한 c번 컵에 조약돌이 들어있으면 점수 계산해준다
        if (cups[c] === 1) {
            score++;
        }
    }

    maxScore = Math.max(maxScore, score);
}

console.log(maxScore);