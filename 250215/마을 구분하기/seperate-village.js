const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));
const visited = Array.from({length: n}, () => Array.from({length: n}, () => false));

function inRange(r, c) {
    return r >= 0 && r < n && c >= 0 && c < n;
}

// 범위 내 존재하고, 방문한 적 없고, 사람이 사는 경우 탐색 가능
function canGo(r, c) {
    if (inRange(r, c) && !visited[r][c] && matrix[r][c] === 1) {
        return true;
    }
    return false;
}

function dfs(r, c) {
    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    visited[r][c] = true;
    let cnt = 1;

    for (let d=0; d<4; d++) {
        nr = r + dr[d];
        nc = c + dc[d];

        if (canGo(nr, nc)) {
            cnt += dfs(nr, nc);
        }
    }

    return cnt;
}

let results = [];
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (matrix[i][j] === 1 && !visited[i][j]) {
            results.push(dfs(i, j));
        }
    }
}

results.sort((a, b) => a - b);
console.log(results.length);
console.log(results.join('\n'));