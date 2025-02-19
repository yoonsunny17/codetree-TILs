const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));
const visited = Array.from({length: n}, () => Array.from({length: m}, () => 0));

const inRange = (r, c) => {
    return r >= 0 && r < n && c >=0 && c < m;
}

const bfs = (r, c) => {
    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];
    
    let q = [];
    q.push([r, c]);
    visited[r][c] = 1;

    while (q.length) {
        let [row, col] = q.shift();

        for (let d=0; d<4; d++) {
            let nr = row + dr[d];
            let nc = col + dc[d];

            // 범위 내, 방문한 적 없고, 지나갈 수 있는 곳인 경우 > 탐색 가능
            if (inRange(nr, nc) && visited[nr][nc] === 0 && matrix[nr][nc] === 1) {
                visited[nr][nc] = visited[row][col] + 1;
                q.push([nr, nc]);
            }
        }
    }
}

bfs(0, 0); // [0, 0]에서 bfs를 돌린다
console.log(visited[n-1][m-1] === 0 ? -1 : visited[n-1][m-1] - 1);