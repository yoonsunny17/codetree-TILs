// 범위 유효성 검증
const isRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < n;
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

// n*n 이차원행렬
let matrix = Array(n).fill(0).map((n) => Array().fill(0));

// 상 하 좌 우
const dr = [-1, 1, 0, 0], dc = [0, 0, -1, 1];

// 색칠 진행
for (let i=0; i<m; i++) {
    let [r, c] = input[i].split(' ').map((v) => Number(v)-1);

    // step1. 주어진 칸을 색칠한다
    matrix[r][c] = 1;

    // step2. 주어진 칸이 편안한 상태인지 확인한다
    let check = 0;
    for (let k=0; k<4; k++) {
        let nr = r + dr[k], nc = c + dc[k];
        if (isRange(nr, nc) && matrix[nr][nc] === 1) check++;
    }

    // step3. 확인 후 결과를 출력한다 (0 or 1)
    console.log(check === 3 ? 1 : 0);
}