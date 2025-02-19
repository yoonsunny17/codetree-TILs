const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));
const visited = Array.from({length: n}, () => Array.from({length: n}, () => false));

const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < n;
}

const dfs = (r, c, prev) => {
    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    visited[r][c] = true;
    let cnt = 1;

    for (let d=0; d<4; d++) {
        let nr = r + dr[d];
        let nc = c + dc[d];

        // 범위 내, 방문한 적 없고, 같은 숫자라면 dfs 재귀 가능
        if (inRange(nr, nc) && !visited[nr][nc] && matrix[nr][nc] === prev) {
            cnt += dfs(nr, nc, prev);
        }
    }

    return cnt;
}

let rlt = [];
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        // 방문한 적 없다면 탐색 시작한다
        if (!visited[i][j]) {
            rlt.push(dfs(i, j, matrix[i][j]));
        }
    }
}

// 4개 이상을 만족하는 블럭 개수와, 최대 블럭 개수를 구한다
let blocks = rlt.filter((v) => v >= 4).length;
let maxVal = rlt.sort((a, b) => b - a)[0];
console.log(blocks, maxVal);