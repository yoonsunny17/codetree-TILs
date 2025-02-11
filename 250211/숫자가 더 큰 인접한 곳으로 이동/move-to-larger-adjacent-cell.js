const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, r, c] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

// 상 하 좌 우
dr = [-1, 1, 0, 0];
dc = [0, 0, -1, 1];

// 범위 체크해줄 함수
const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

let numbs = []; // 지나온 숫자들 넣어줄 함수
let row = r-1, col = c-1;
numbs.push(matrix[row][col]);

// 조건 만족하는 숫자가 없을 때까지 반복한다
while (true) {
    let flag = false; // 주변에 조건 만족하는 숫자가 있는지 확인할 플래그

    for (let d=0; d<4; d++) {
        let nr = row + dr[d];
        let nc = col + dc[d];

        // 범위 내에 존재하고, 기준 좌표보다 더 큰 숫자인 경우
        if (inRange(nr, nc) && matrix[nr][nc] > matrix[row][col]) {
            // 기준 좌표를 갱신해주고, numbs배열에 넣어주고, flag 바꿔주고, 탐색 멈춘다
            row = nr, col = nc;
            numbs.push(matrix[row][col]);
            flag = true;
            break;
        }
    }

    // 네 방향 모두 봤는데 조건 만족하는 숫자가 없다면 탐색 종료한다
    if (!flag) break;
}

console.log(numbs.join(' '));