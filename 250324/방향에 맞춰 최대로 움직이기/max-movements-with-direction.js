const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const matrix = Array.from({length: N}, (_, i) => input[i+1].split(' ').map(Number));
const directions = Array.from({length: N}, (_, i) => input[i+1+N].split(' ').map(Number));
const [sr, sc] = input[2*N+1].split(' ').map((v) => Number(v)-1);

const dr = [-1, -1, 0, 1, 1, 1, 0, -1];
const dc = [0, 1, 1, 1, 0, -1, -1, -1];

let ans = -1; // 최대 이동 횟수 저장할 변수

const inRange = (r, c) => r >= 0 && r < N && c >= 0 && c < N;

// 다음 탐색이 범위 내에 존재하고, 현재 탐색 지점보다 큰 숫자인 경우 움직일 수 있다
const canMove = (r, c) => {
    let dir = directions[r][c] - 1;
    let nr = r + dr[dir];
    let nc = c + dc[dir];

    if (inRange(nr, nc) && matrix[nr][nc] > matrix[r][c]) {
        return true;
    }

    return false;
}

const backtracking = (cnt, r, c) => {
    // 더이상 움직일 수 없다면, 최대 이동 횟수를 갱신해준다
    if (!canMove(r, c)) {
        ans = Math.max(ans, cnt);
        return;
    }

    // 한 방향으로 최대 N번 이동 가능하다
    for (let i=1; i<=N; i++) {
        let nr = r + dr[directions[r][c] - 1] * i;
        let nc = c + dc[directions[r][c] - 1] * i;

        // 다음 탐색 지점이 범위 내에 존재하고, 현재 탐색 지점보다 크다면 이동 가능하다
        if (inRange(nr, nc) && matrix[nr][nc] > matrix[r][c]) {
            backtracking(cnt+1, nr, nc)
        }
    }
}

backtracking(1, sr, sc);
console.log(ans);