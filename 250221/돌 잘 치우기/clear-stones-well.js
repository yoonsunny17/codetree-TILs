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

    // m개의 돌을 치웠으면, 최대 이동 가능한 곳의 개수를 센다 (한 지점당 한번씩이 아니라, 한번에 몇군데 갈 수 있는지를 계산한다)
    if (cnt === m) {
        let visited = Array.from({length: n}, () => Array.from({length: n}, () => false));
        // m개의 돌을 치웠을 때, bfs 탐색을 돌려본다
        for (let info of infos) {
            const [row, col] = info.map((v) => Number(v)-1);
            bfs(row, col, grid, visited);
        }
        
        // 총 방문한 곳의 개수를 세어주고, 최댓값 갱신한다
        let total = 0;
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (visited[i][j] === true) {
                    total++;
                }
            }
        }

        maxVal = Math.max(maxVal, total);
    }

    // 아직 m개의 돌을 치우는 중
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

const bfs = (r, c, grid, visited) => {
    let q = [];

    visited[r][c] = true;
    q.push([r, c]);

    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    while (q.length) {
        let [row, col] = q.shift();

        for (let d=0; d<4; d++) {
            let nr = row + dr[d];
            let nc = col + dc[d];

            // 범위 내에 있고, 방문한 적 없으며, 돌이 없는 곳 >> 탐색 가능하다
            if (inRange(nr, nc) && !visited[nr][nc] && grid[nr][nc] === 0) {
                visited[nr][nc] = true;
                q.push([nr, nc]);
            }
        }
    }
}

removeStones(matrix, 0);
console.log(maxVal);