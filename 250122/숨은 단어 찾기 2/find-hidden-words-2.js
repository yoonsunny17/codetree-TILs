const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i].split(''));

// dr, dc
const dr = [1, 1, 1, 0, -1, -1, -1, 0];
const dc = [-1, 0, 1, 1, 1, 0, -1, -1];

const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < m;
}

let cnt = 0;

for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        // 처음 문자가 L이 아닌 경우 패스
        if (matrix[i][j] !== 'L') {
            continue;
        }

        // 인접 부분 연속 체크
        for (let dir=0; dir<dr.length; dir++) {
            let s = 'L';
            let curR = i, curC = j;

            while (true) {
                // 다음 탐색 지점 설정
                const nr = curR + dr[dir];
                const nc = curC + dc[dir];

                // 범위 벗어나는 경우 끝
                if (!inRange(nr, nc)) {
                    break;
                }

                // 문자열 길이가 3이면 끝
                if (s.length === 3) {
                    break;
                }

                s += matrix[nr][nc]
                curR = nr, curC = nc;
            }

            if (s === 'LEE') {
                cnt++;
            }
        }
    }
}

console.log(cnt);