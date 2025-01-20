const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const matrix = input.map((v) => v.split(' ').map(Number));

// 범위 내 존재하는지 확인
const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < n;
}

// 인접한 부분 확인
const checkAdjecent = (r, c) => {
    let checkOne = 0;
    for (let dir=0; dir<4; dir++) {
        let nr = r + dr[dir], nc = c + dc[dir];

        // 범위내 존재하고, 1인 경우
        if (inRange(nr, nc) && matrix[nr][nc] === 1) {
            checkOne++;
        }
    }

    return checkOne >= 3 ? true : false;
}

// 상 하 좌 우
let dr = [-1, 1, 0, 0], dc = [0, 0, -1, 1];

let cnt = 0;
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (checkAdjecent(i, j)) {
            cnt++
        }
    }
}

console.log(cnt)

