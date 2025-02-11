const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const matrix = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));
const [r, c] = input[n].split(' ').map((v) => Number(v)-1);

// 상 하 좌 우
dr = [-1, 1, 0, 0];
dc = [0, 0, -1, 1];

// 범위내에 존재하는지 확인한다
const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

// 좌표의 수에 따라 터져야 하는 폭탄 수가 정해진다
const bomb = matrix[r][c];

// 네 방향 탐색 시작한다
for (let i=0; i<4; i++) {
    for (let j=0; j<bomb; j++) {
        let nr = r + dr[i] * j;
        let nc = c + dc[i] * j;

        // 범위 내에 존재한다면, 터뜨려주자
        if (inRange(nr, nc)) {
            matrix[nr][nc] = 0;
        }
    }
}

// 폭탄 터진 후, 중력방향으로 정리한다
// 열 기준으로, 아래에서 위로 확인한다
for (let j=0; j<n; j++) {
    for (let i=n-2; i>=0; i--) {
        if (matrix[i+1][j] === 0) {
            matrix[i+1][j] = matrix[i][j];
            matrix[i][j] = 0;
        }
    }
}

matrix.forEach((row) => console.log(row.join(' ')));