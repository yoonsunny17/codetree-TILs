const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());

// 상 하 좌 우 (N S W E)
const dict = {
    'N': 0,
    'S': 1,
    'W': 2,
    'E': 3,
}

let dr = [-1, 1, 0, 0], dc = [0, 0, -1, 1];
let r = 0, c = 0;
let dir;

let cnt = 0;
for (let i=0; i<n; i++) {
    let [d, f] = input[i].split(' ');
    dir = dict[d];

    for (j=0; j<Number(f); j++) {
        r += dr[dir], c += dc[dir];
        cnt++;

        // 초기 위치에 도착했다면 답 출력하고 바로 종료
        if (r === 0 && c === 0) {
            console.log(cnt);
            return;
        }
    }
}

// 초기위치에 도착하지 못하고 끝났으면 -1 출력
console.log(-1);