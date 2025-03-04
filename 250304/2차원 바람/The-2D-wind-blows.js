const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(' ').map(Number);
let matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));
const infos = Array.from({length: q}, (_, i) => input[i+n+1].trim().split(' ').map((v) => Number(v)-1));

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < m;

// 상 하 좌 우
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

for (let info of infos) {
    let arr = matrix.map((row) => [...row]); // deep copy;
    const [r1, c1, r2, c2] = info;

    // 시계방향으로 바람을 불어준다.
    for (let j=c2; j>c1; j--) {
        arr[r1][j] = matrix[r1][j-1];
    }

    for (let i=r2; i>r1; i--) {
        arr[i][c2] = matrix[i-1][c2];
    }

    for (let j=c1; j<c2; j++) {
        arr[r2][j] = matrix[r2][j+1];
    }

    for (let i=r1; i<r2; i++) {
        arr[i][c1] = matrix[i+1][c1];
    }


    // 각 원소들의 인접한 원소들과 평균값 계산해서 값을 갱신한다
    for (let i=r1; i<=r2; i++) {
        for (let j=c1; j<=c2; j++) {
            let [cnt, sum] = [1, arr[i][j]];
            for (let d=0; d<4; d++) {
                let nr = i + dr[d];
                let nc = j + dc[d];

                if (inRange(nr, nc)) {
                    cnt += 1;
                    sum += arr[nr][nc];
                }
            }

            matrix[i][j] = parseInt(sum / cnt);
        }
    }
}

for (let row of matrix) {
    console.log(row.join(' '));
}