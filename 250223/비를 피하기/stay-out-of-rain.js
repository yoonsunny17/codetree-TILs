const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, m] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

const bfs = (r, c) => {
    let visited = Array.from({ length: n }, () => Array(n).fill(false));
    let q = [[r, c, 0]];
    visited[r][c] = true;
    
    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    let flag = false;

    while (q.length) {
        let [row, col, cnt] = q.shift();
        for (let i=0; i<4; i++) {
            let nr = row + dr[i];
            let nc = col + dc[i];

            // 범위 내, 미방문, 1이 아니라면 탐색 가능하다
            if (inRange(nr, nc) && !visited[nr][nc] && matrix[nr][nc] !== 1) {
                // 근데 만약 3인 곳이라면 이동 완료
                if (matrix[nr][nc] === 3) {
                    flag = true; // 도착했음을 flag로 표시
                    return cnt+1;
                } else {
                    visited[nr][nc] = true;
                    q.push([nr, nc, cnt+1]);
                }
            }
        }
    }

    // 3으로 이동이 불가한 경우
    if (!flag) {
        return -1;
    }
}

// 사람이 있는 위치 대상으로 bfs를 돌려본다
let rlt = Array.from({length: n}, () => Array(n).fill(0)); // 정답 저장할 2차원 배열
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (matrix[i][j] === 2) {
            rlt[i][j] = bfs(i, j);
        }
    }
}

for (let row of rlt) {
    console.log(row.join(' '));
}