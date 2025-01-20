const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('');

// 상 우 하 좌 순서 (좌표평면 기준!)
let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

let dir = 0; // 처음에 북쪽을 바라본 상태에서 시작
let x = 0, y = 0; // (0, 0) 에서 시작
for (let command of input) {
    if (command === 'L') {
        // 반시계 방향 회전
        dir = (dir + 3) % 4;
    } else if (command === 'R') {
        // 시계 방향 회전
        dir = (dir + 1) % 4;
    } else {
        x += dx[dir];
        y += dy[dir];
    }
}

console.log(x, y)