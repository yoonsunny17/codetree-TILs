const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, m] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));
const infos = Array.from({length: k}, (_, i) => input[i+1+n].trim().split(' ').map(Number));
let maxVal = -1;

// 범위 체크
const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

// 1이 있는 위치를 미리 저장한다 (조합 계산을 위해)
const stones = [];
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (matrix[i][j] === 1){
            stones.push([i, j]);
        }
    }
}

// 돌 m개의 조합을 구한다
const selectStones = (curr, start, selected) => {
    if (selected.length === m) {
        // m개의 돌을 다 치웠다면 bfs를 돌린다
        for (let [r, c] of selected) {
            matrix[r][c] = 0;
        }

        const visited = Array.from({length: n}, () => Array.from({length: n}, () => false));
        for (const info of infos) {
            const [row, col] = info.map(v => v-1);
            bfs(row, col, visited);
        }

        // 방문 가능한 칸 수를 계산한다
        let cnt = 0;
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (visited[i][j]) cnt++;
            }
        }
        maxVal = Math.max(maxVal, cnt);

        // 돌 원상복구 시켜준다
        for (let [r, c] of selected) {
            matrix[r][c] = 1;
        }
        return;
    }

    // 조합 생성 (backtracking)
    for (let i=start; i<stones.length; i++) {
        selected.push(stones[i]);
        selectStones(curr+1, i+1, selected);
        selected.pop();
    }
}

const bfs = (r, c, visited) => {
    const q = [[r, c]];
    visited[r][c] = true;

    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    while (q.length) {
        const [row, col] = q.shift();

        for (let d=0; d<4; d++) {
            let nr = row + dr[d];
            let nc = col + dc[d];

            if (inRange(nr, nc) && !visited[nr][nc] && matrix[nr][nc] === 0) {
                visited[nr][nc] = true;
                q.push([nr, nc]);
            }
        }
    }
}

selectStones(0, 0, []);
console.log(maxVal);