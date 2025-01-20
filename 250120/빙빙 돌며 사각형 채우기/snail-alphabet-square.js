// 범위 유효 검증
const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < m;
}

const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let matrix = Array(n).fill('').map(() => Array(m).fill('')); // 이차원 배열 초기화
matrix[0][0] = 'A';

let code = 65; // A = 65, Z = 90;

// 우 하 좌 상
const dr = [0, 1, 0, -1], dc = [1, 0, -1, 0];
let [r, c, dir] = [0, 0, 0];

for (let i=2; i<=n*m; i++) {
    let nr = r + dr[dir], nc = c + dc[dir];

    // 범위를 벗어났거나, 빈 칸이 아닌 경우 > 방향 틀기
    if (!inRange(nr, nc) || matrix[nr][nc] !== '') {
        dir = (dir + 1) % 4;
    }

    // 위치 갱신해주고, 넣어줄 아스키 코드 확인
    r += dr[dir], c += dc[dir];
    if (code === 90) {
        code = 65;
    } else {
        code++;
    }
    matrix[r][c] = String.fromCharCode(code);
}

for (let row of matrix) {
    console.log(row.join(' '));
}