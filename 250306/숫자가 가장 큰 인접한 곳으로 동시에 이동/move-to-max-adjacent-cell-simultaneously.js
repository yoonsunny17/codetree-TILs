const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, time] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));
const infos = Array.from({length: m}, (_, i) => input[i+n+1].split(' ').map((v) => Number(v)-1));

let check = Array.from({length: n}, (_, i) => Array.from({length: n}, () => 0)); // 현재 구슬의 위치 확인
let nextCheck = Array.from({length: n}, (_, i) => Array.from({length: n}, () => 0)); // 구슬의 다음 위치 확인

// 상 하 좌 우
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

// 구슬의 초기 위치를 체크한다
for (let info of infos) {
    let [r, c] = info;
    check[r][c] = 1;
}

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

const moveBead = (r, c) => {
    let [sr, sc, val] = [r, c, 0];
    for (let d=0; d<4; d++) {
        let nr = r + dr[d];
        let nc = c + dc[d];

        // 범위 내에 존재하는 경우
        if (inRange(nr, nc)) {
            // 가장 큰 값인 경우 갱신한다
            if (matrix[nr][nc] > val) {
                sr = nr;
                sc = nc;
                val = matrix[nr][nc];
            }
        }
    }

    // 현재 구슬을 최댓값 위치로 옮겨준다
    nextCheck[sr][sc]++;
}

// t초동안 반복 진행한다
for (let t=0; t<time; t++) {
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            // 구슬이 있는 곳이라면, 탐색을 시작하자
            if (check[i][j] === 1) {
                moveBead(i, j)
            }
        }
    }
    // 현재 위치를 업데이트 해준다
    check = nextCheck;
    
    // 만약 한 자리에 두개 이상의 구슬이 있다면 폭파시킨다
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (check[i][j] >= 2) {
                check[i][j] = 0;
            }
        }
    }
}

// 남아있는 구슬의 수를 반환한다
let cnt = 0;
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (check[i][j] === 1) {
            cnt++;
        }
    }
}

console.log(cnt);