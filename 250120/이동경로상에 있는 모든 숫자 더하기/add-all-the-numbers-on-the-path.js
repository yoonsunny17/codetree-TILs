// 범위 유효성 체크
const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < n;
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const commands = input[1].split('');

let matrix = [];
for (let i=0; i<n; i++) {
    matrix.push(input[i+2].split(' ').map(Number));
}

let [r, c] = [Math.floor(n/2), Math.floor(n/2)]

// 상 우 하 좌
const dr = [-1, 0, 1, 0], dc = [0, 1, 0, -1];
let dir = 0;

let cnt = matrix[r][c]; // 시작 위치 숫자 포함해서 초기화

for (let command of commands) {
    if (command === 'R') {
        // 시계방향으로 틀기
        dir = (dir + 1) % 4;
    } else if (command === 'L') {
        // 반시계방향으로 틀기
        dir = (dir + 3) % 4;
    } else {
        let nr = r + dr[dir], nc = c + dc[dir];
        // 범위 유효성 체크 후 한칸 이동하기
        if (inRange(nr, nc)) {
            r += dr[dir], c += dc[dir];
            cnt += matrix[r][c]
        } else {
            continue;
        }
    }
}

console.log(cnt);