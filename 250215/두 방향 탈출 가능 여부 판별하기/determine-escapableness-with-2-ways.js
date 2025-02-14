const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));
const visited = Array.from({length: n}, () => Array.from({length: m}, () => false));

visited[0][0] = true; // 시작지점 방문 체크 해준다

// 탐색하는 좌표가 범위 내에 존재하는지 확인한다
function inRange(r, c) {
    return r >= 0 && r < n && c >= 0 && c < m;
}

// 범위 내, 뱀 아님, 방문한 적 없으면 탐색 가능하다
function canGo(r, c) {
    if (inRange(r, c) && matrix[r][c] !== 0 && !visited[r][c]) {
        return true;
    }
    return false;
}

function dfs(r, c) {
    // 아래, 오른쪽 (이동방향)
    const dr = [1, 0];
    const dc = [0, 1];

    for (let i=0; i<2; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        // 범위 내에 존재하고, 뱀이 없고, 방문한 적 없다면
        if (canGo(nr, nc)) {
            visited[nr][nc] = true;
            // 그 지점을 다음 탐색 지점으로 정해준다
            dfs(nr, nc);
        }
    }

}

dfs(0, 0); // 출발지점: (0, 0)

// visited에서 도착 지점이 true이면 탈출 성공
console.log(visited[n-1][m-1] ? 1 : 0);