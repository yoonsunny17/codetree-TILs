const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [sr, sc, er, ec] = input[1].trim().split(' ').map((v) => Number(v)-1);
const visited = Array.from({length: n}, () => Array.from({length: n}, () => 0));

// 탐색 가능한 범위인지 확인한다
const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

const bfs = (r, c) => {
    visited[r][c] = 1;
    let q = [[r, c]];

    // 이동 가능한 여덟 방향
    let dr = [-2, -1, 1, 2, 2, 1, -1, -2];
    let dc = [1, 2, 2, 1, -1, -2, -2, -1];

    while (q.length) {
        let [row, col] = q.shift();

        for (let i=0; i<8; i++) {
            let nr = row + dr[i];
            let nc = col + dc[i];

            // 범위 내, 미방문 >> 탐색 가능
            if (inRange(nr, nc) && visited[nr][nc] === 0) {
                visited[nr][nc] = visited[row][col] + 1;
                q.push([nr, nc]);
            }
        }
    }
}

bfs(sr, sc);
console.log(visited[er][ec] === 0 ? -1 : visited[er][ec]-1);