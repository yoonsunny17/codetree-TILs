const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const n = Number(input[0]);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

// 1 2 3 4 (진행방향 순서대로)
const dr = [-1, -1, 1, 1];
const dc = [1, -1, -1, 1];

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

const findSquare = (sr, sc) => {
    const [or, oc] = [sr, sc];
    let maxSum = 0;
    let sum = 0;
    let dir = 0;
    let check = Array(4).fill(0);
     
    while (dir < 4) {
        let nr = sr + dr[dir];
        let nc = sc + dc[dir];

        // dir === 3인 경우 > 맨 처음 시작지점이라면 끝낸다
        if (dir === 3 && nr === or && nc === oc) {
            sum += matrix[sr][sc];
            check[dir]++;
            break;
        }

        // 범위내에 존재한다면 갈 수 있다
        if (inRange(nr, nc)) {
            sum += matrix[sr][sc];
            check[dir]++;
            sr = nr;
            sc = nc;
        } else {
            // 다음 지점이 범위 밖을 벗어난다면 방향을 바꿔준다
            dir += 1;
            continue;
        }
    }

    // 네 방향에 대해서 모두 순환한 경우에만 출력한다
    if (check.every((v) => v !== 0)) {
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

let maxVal = -1;

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        maxVal = Math.max(maxVal, findSquare(i, j));
    }
}

console.log(maxVal);