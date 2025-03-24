const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const matrix = Array.from({length: N}, (_, i) => input[i+1].split(' ').map(Number));
const directions = Array.from({length: N}, (_, i) => input[i+1+N].split(' ').map(Number));
const [sr, sc] = input[2*N+1].split(' ').map((v) => Number(v)-1);

const dr = [-1, -1, 0, 1, 1, 1, 0, -1];
const dc = [0, 1, 1, 1, 0, -1, -1, -1];

let ans = 0; // 최대 이동 횟수 저장할 변수

const inRange = (r, c) => r >= 0 && r < N && c >= 0 && c < N;

// 다음 탐색 지점을 반환한다
const getNextPos = (r, c, i) => {
    const dir = directions[r][c] - 1;
    return [r + dr[dir] * i, c + dc[dir] * i];
}

// 다음 탐색 지점이 범위 내에 존재하고, 현재 탐색 지점보다 큰 숫자라면 이동 가능하다
const canMove = (r, c) => {
    for (let i=1; i<=N; i++) {
        const [nr, nc] = getNextPos(r, c, i);
        if (inRange(nr, nc) && matrix[nr][nc] > matrix[r][c]) {
            return true;
        }
    }

    return false;
}

const backtracking = (cnt, r, c) => {
    if (!canMove(r, c)) {
        ans = Math.max(ans, cnt);
        return;
    }

    for (let i=1; i<=N; i++) {
        const [nr, nc] = getNextPos(r, c, i);
        if (inRange(nr, nc) && matrix[nr][nc] > matrix[r][c]) {
            backtracking(cnt+1, nr, nc);
        }
    }
}

backtracking(0, sr, sc);
console.log(ans);