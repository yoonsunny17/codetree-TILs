const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

// k의 최댓값을 구한다 > 1부터 maxK까지 확인한다
let maxK = 0;
for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        maxK = Math.max(maxK, matrix[i][j]);
    }
}

// 범위 내 존재하는지
const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < m;
}

const canGo = (r, c, k, visited) => {
    // 범위 내, k보다 큼, 방문한 적 없음 > 통과
    if (inRange(r, c) && matrix[r][c] > k && !visited[r][c]) {
        return true;
    }
    return false;
}

const dfs = (r, c, k, visited) => {
    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    visited[r][c] = true;
    let val = 1;

    for (let d=0; d<4; d++) {
        nr = r + dr[d];
        nc = c + dc[d];

        if (canGo(nr, nc, k, visited)) {
            val += dfs(nr, nc, k, visited);
        }
    }

    return val;
}

let rlt = [-1, -1];

// k 하나에 대해, 각자 안전영역이 몇개씩 나오는지 확인한다
for (let k=1; k<=maxK; k++) {
    // k값이 바뀔 때마다 visited 초기화 해줘야 한다
    const visited = Array.from({length: n}, () => Array.from({length: m}, () => false));
    let cnt = 0;
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            // 해당 지점이 k보다 크고, 방문한 적 없다면 dfs를 돌린다
            if (matrix[i][j] > k && !visited[i][j]) {
                dfs(i, j, k, visited);
                cnt++;
            }
        }
    }

    // 안전영역 개수 최댓값 갱신해준다
    if (rlt[1] < cnt) {
        rlt[1] = cnt;
        rlt[0] = k;
    }
}

console.log(rlt.join(' '));