// 특정 위치에서 시작해서 bfs 돌린다
// bfs를 도는 동안, 시작 위치보다 작은 숫자들 중 최댓값에 대한 정보를 갱신한다 (숫자, 위치)
// 조건 만족하는 숫자가 다음 탐색 시작 지점이 된다
// k번동안 반복 진행할 것 > 한바퀴 돌때마다 visited 초기화 필요
// 단, k번이 안되었는데 더이상 새로 이동할 위치가 없다면 움직이는 것 종료
// 마지막 위치를 출력

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));
const [r, c] = input[n+1].trim().split(' ').map((v) => Number(v)-1);

const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < n;
}

const bfs = (r, c, prev) => {
    // 상 하 좌 우
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    // 방문 표시 할 리스트와 큐를 만들어준다
    // 탐색하면서 갱신할 최댓값과, 최댓값의 위치를 초기화해준다
    let visited = Array.from({length: n}, () => Array.from({length: n}, () => false));
    let q = [];
    let maxNumb = -1;
    let maxPosition = [-1, -1];

    q.push([r, c]);
    visited[r][c] = true;

    while (q.length) {
        let [row, col] = q.shift();
        for (let d=0; d<4; d++) {
            let nr = row + dr[d];
            let nc = col + dc[d];

            // 범위내, 방문한 적 없음, 시작점 수보다 작음
            if (inRange(nr, nc) && !visited[nr][nc] && matrix[nr][nc] < prev) {
                // 방문 처리, 큐에 넣기
                visited[nr][nc] = true;
                q.push([nr, nc]);
                if (maxNumb < matrix[nr][nc]) {
                    maxNumb = matrix[nr][nc];
                    maxPosition = [nr, nc];
                }

                if (maxNumb === matrix[nr][nc]) {
                    if (maxPosition[0] > nr) {
                        maxPosition = [nr, nc];
                    } else if (maxPosition[0] === nr) {
                        maxPosition = [nr, nc];
                    }
                }
            }
        }
    }

    // 만약 최댓값이 갱신되지 않았다면 > 움직일 수 없었다는 의미
    if (maxNumb === -1) {
        return [-1, -1]
    }

    return [maxNumb, maxPosition]
}

// k번 반복한다
let cnt = 0;
let sr = r, sc = c;
let curr = matrix[sr][sc];
while (true) {
    if (cnt === k) {
        break;
    }

    let [maxNumb, maxPosition] = bfs(sr, sc, curr);
    if (maxNumb === -1 && maxPosition === -1) {
        break;
    }

    sr = maxPosition[0], sc = maxPosition[1];
    curr = maxNumb;
    cnt++;
}

console.log(sr+1, sc+1);