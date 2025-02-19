const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));
const infos = Array.from({length: k}, (_, i) => input[i+n+1].split(' ').map(Number));
const visited = Array.from({length: n}, () => Array.from({length: n}, () => false));

const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < n;
}

// 범위 내에 있고, 방문한 적 없으며, 0인 곳이면 탐색 가능
const canGo = (r, c) => {
    if (inRange(r, c) && !visited[r][c] && matrix[r][c] === 0) {
        return true;
    }
    return false;
}

const bfs = (r, c) => {
    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    let q = [];
    q.push([r, c]);

    let cnt = 1;  // 첫 방문 노드도 개수에 포함해야 함
    visited[r][c] = true; // 여기서 방문 처리

    while (q.length) {
        let [row, col] = q.shift();
        for (let d = 0; d < 4; d++) {
            let nr = row + dr[d];
            let nc = col + dc[d];

            if (canGo(nr, nc)) {
                cnt++;
                visited[nr][nc] = true;
                q.push([nr, nc]);
            }
        }
    }
    return cnt;
}

let val = 0;
for (let info of infos) {
    let [r, c] = info.map((v) => Number(v) - 1);
    // 해당 노드가 이미 방문한 지점이라면, 굳이 탐색할 필요 없다
    if (visited[r][c]) continue;
    val += bfs(r, c);
}

console.log(val);
