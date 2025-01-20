const isRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < m;
}

const fs = require('fs');
let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 우 하 좌 상
let dr = [0, 1, 0, -1];
let dc = [1, 0, -1, 0];

let matrix = Array(n).fill(0).map(() => Array(m).fill(0));
let r = 0, c = 0; // 초기 위치 설정
let dir = 0; // 초기 방향: 오른쪽
matrix[r][c] = 1; // 초기 위치 1 채워주기 (방문 표시)

for (let i=2; i<=n*m; i++) {
    let nr = r + dr[dir], nc = c + dc[dir];

    // 영역을 벗어났거나, 이미 채워져 있는 칸이라면 방향 회전
    if (!isRange(nr, nc) || matrix[nr][nc] !== 0) {
        dir = (dir + 1) % 4;
    }

    r += dr[dir], c += dc[dir];
    matrix[r][c] = i;
}

for (let row of matrix) {
    console.log(row.join(' '));
}