const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

let maxVal = 0;

const inRange = (r, c) => 0 <= r && r < n && 0 <= c && c < m;

const solution1 = (r, c) => {
    let val1 = 0, val2 = 0, val3 = 0, val4 = 0;
    // (r, c) 중심으로
    // (상, 우) (우, 하) (좌, 하) (상, 하) 네 방향 탐색

    // 1. 상 우
    if (inRange(r-1, c) && inRange(r, c+1)) {
        val1 = matrix[r][c] + matrix[r-1][c] + matrix[r][c+1];
    }

    // 2. 우 하
    if (inRange(r, c+1) && inRange(r+1, c)) {
        val2 = matrix[r][c] + matrix[r][c+1] + matrix[r+1][c];
    }

    // 3. 좌 하
    if (inRange(r, c-1) && inRange(r+1, c)) {
        val3 = matrix[r][c] + matrix[r][c-1] + matrix[r+1][c];
    }

    // 4. 상 좌
    if (inRange(r-1, c) && inRange(r, c-1)) {
        val4 = matrix[r][c] + matrix[r-1][c] + matrix[r][c-1];
    }

    return Math.max(val1, val2, val3, val4);
}

const solution2 = (r, c) => {
    let val1 = 0, val2 = 0;
    // 1 * 3 검사
    // 시작점 으로부터 오른쪽 두 칸이 범위 내에 존재하는 경우
    if (inRange(r, c+1) && inRange(r, c+2)) {
        val1 = matrix[r][c] + matrix[r][c+1] + matrix[r][c+2];
    }

    // 3 * 1 검사
    // 시작점으로부터 아래로 두 칸이 범위 내에 존재하는 경우
    if (inRange(r+1, c) && inRange(r+2, c)) {
        val2 = matrix[r][c] + matrix[r+1][c] + matrix[r+2][c];
    }

    return Math.max(val1, val2);
}

for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        let val1 = solution1(i, j); // ㄱ자 모양
        let val2 = solution2(i, j); // 일자 모양

        maxVal = Math.max(maxVal, val1, val2);
    }
}

console.log(maxVal);