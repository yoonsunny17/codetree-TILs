const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

const MAX_NUMB = n**2;

// 범위 내 체크
const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

const changePosition = (r, c, curr, check) => {
    const dr = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dc = [-1, 0, 1, 1, 1, 0, -1, -1];

    // 최댓값이 존재하는 자리와, 최댓값을 저장한다
    let [mr, mc, val] = [-1, -1, -1];

    for (let d=0; d<8; d++) {
        let nr = r + dr[d];
        let nc = c + dc[d];

        if (inRange(nr, nc) && matrix[nr][nc] > val) {
            mr = nr;
            mc = nc;
            val = matrix[nr][nc];
        }
    }

    // 두 숫자의 위치를 교환한다
    check[r][c] = val;
    check[mr][mc] = curr;
}

// m번 반복한다
for (let time=0; time<m; time++) {
    let curr = 1; // 1부터 n**2까지 확인한다
    while (curr < MAX_NUMB + 1) {
        // deep copy 해서 위치 바뀐 것을 체크할 배열을 만든다
        let check = matrix.map((row) => [...row]);
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (matrix[i][j] === curr) {
                    changePosition(i, j, curr, check);
                    break;
                }
            }
        }

        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                matrix[i][j] = check[i][j];
            }
        }
        curr++;
    }
}

for (let row of matrix) {
    console.log(row.join(' '));
}