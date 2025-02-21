const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, m] = input[0].split(' ').map(Number);
let matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));
const infos = Array.from({length: k}, (_, i) => input[i+1+n].trim().split(' ').map(Number));
let maxVal = -1; // 최대 방문 개수 받을 변수

// 범위 내인지 확인한다
const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < n;
}

const removeStones = (matrix, cnt) => {
    let grid = matrix.map((row) => [...row]); // deep copy

    if (cnt === m) {
        // m개의 돌을 치웠을 때, bfs 탐색을 돌려본다
        for (let info of infos) {
            const [row, col] = info.map((v) => Number(v)-1);
            maxVal = Math.max(maxVal, bfs(row, col, grid));
            return;
        }
    }

    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (matrix[i][j] === 1) {
                grid[i][j] = 0;
                removeStones(grid, cnt+1);
                grid[i][j] = 1;
            }
        }
    }
}

const bfs = (r, c, grid) => {
    let visited = Array.from({length: n}, () => Array.from({length: n}, () => false));
    let q = [];

    visited[r][c] = true;
    q.push([r, c]);

    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    let cnt = 1;

    while (q.length) {
        let [row, col] = q.shift();

        for (let d=0; d<4; d++) {
            let nr = row + dr[d];
            let nc = col + dc[d];

            // 범위 내에 있고, 방문한 적 없으며, 돌이 없는 곳 >> 탐색 가능하다
            if (inRange(nr, nc) && !visited[nr][nc] && grid[nr][nc] === 0) {
                visited[nr][nc] = true;
                q.push([nr, nc]);
                cnt++;
            }
        }
    }

    return cnt;
}

removeStones(matrix, 0);
console.log(maxVal);