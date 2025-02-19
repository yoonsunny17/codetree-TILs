const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));
const visited = Array.from({length: n}, () => Array.from({length: m}, () => false));

// 해당 지점이 범위 내인지 확인한다
const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < m;
}

const bfs = (r, c) => {
    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    // FIFO 큐에 해당 지점을 넣어주고, 방문처리 해준다
    let q = [[r, c]];
    visited[r][c] = true;

    // 큐가 빌때까지 BFS 탐색을 한다
    while (q.length) {
        let curr = q.shift();
        let row = curr[0], col = curr[1];

        for (let i=0; i<4; i++) {
            let nr = row + dr[i];
            let nc = col + dc[i];

            if (inRange(nr, nc) && !visited[nr][nc] && matrix[nr][nc] === 1) {
                visited[nr][nc] = true;
                q.push([nr, nc]);
            }
        }
    }
}

bfs(0, 0);
console.log(visited[n-1][m-1] === true ? 1 : 0);
