const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let matrix = Array(n).fill(0).map(() => Array(m).fill(0));
matrix[0][0] = 1;

// 하 우 상 좌
const dr = [1, 0, -1, 0], dc = [0, 1, 0, -1];
let [r, c, dir] = [0, 0, 0];

const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < m;
}

for (let i=2; i<=n*m; i++) {
    // 다음 탐색 지점
    let nr = r + dr[dir], nc = c + dc[dir];

    // 범위를 벗어났거나, 이미 채워진 곳이라면 >> 방향 회전
    if (!inRange(nr, nc) || matrix[nr][nc] !== 0) {
        dir = (dir + 1) % 4;
    }

    r += dr[dir], c += dc[dir];
    matrix[r][c] = i;
}

for (let row of matrix) {
    console.log(row.join(' '));
}