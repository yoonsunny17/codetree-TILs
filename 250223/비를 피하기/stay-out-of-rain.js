// 가중치가 동일한 그래프에서 시작점이 여러개인 상태로 BFS 돌리는 경우
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, m] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

// 3인 위치들을 저장한다
const start_pos = [];
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (matrix[i][j] === 3) start_pos.push([i, j]);
    }
}

const q = [];
const visited = Array.from({length: n}, () => Array(n).fill(false));
const step = Array.from({length: n}, () => Array(n).fill(0));

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

// 범위 내, 미방문, 1이 아닌 곳은 탐색 가능하다
const canGo = (r, c) => {
    return inRange(r, c) && !visited[r][c] && matrix[r][c] !== 1;
} 

// q에 새로운 위치 추가하고 방문 여부 표시한다
const push = (nr, nc, cnt) => {
    q.push([nr, nc]);
    visited[nr][nc] = true;
    step[nr][nc] = cnt;
}

const bfs = () => {
    while (q.length) {
        const [row, col] = q.shift();

        // 상 하 좌 우
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        for (let i=0; i<4; i++) {
            const nr = row + dr[i];
            const nc = col + dc[i];

            // 탐색 가능하면 q에 넣어준다
            if (canGo(nr, nc)) {
                push(nr, nc, step[row][col]+1);
            }
        }
    }
}

// 3인 곳들에 대해 q에 위치 추가하고 방문 여부 표시한다
start_pos.forEach(([r, c]) => push(r, c, 0));
bfs();

let rlt = '';
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        // 사람이 있는 위치 제외 모두 0이다
        if (matrix[i][j] !== 2) {
            rlt += '0 '
        } else {
            // 사람이 있는데 방문한 적이 없으면 -1
            if (!visited[i][j]) {
                rlt += '-1 ';
            } else {
                rlt += `${step[i][j]} `;
            }
        }
    }
    rlt += "\n";
}

console.log(rlt);