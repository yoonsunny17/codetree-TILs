const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

// 1, 2, 3, 4
const dr = [-1, -1, 1, 1];
const dc = [1, -1, -1, 1];

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

const findSquare = (r, c, k, l) => {
    const moveNumb = [k, l, k, l];
    let sum = 0;

    // 4방향 탐색을 진행해본다
    for (let d=0; d<4; d++) {
        // (중요) 한 변당 k번 또는 l번을 반복해본다
        for (let q=0; q<moveNumb[d]; q++) {
            r += dr[d];
            c += dc[d];

            // 직사각형이 만들어지지 않는다면 -1 리턴 끝
            if (!inRange(r, c)) {
                return -1;
            }

            sum += matrix[r][c];
        }
    }

    return sum;
}

let maxVal = -1;
// (i, j)를 시작방향으로 1, 2, 3, 4번 dir 순서대로 탐색한다
// 각 직사각형의 한 변의 길이가 [k, l, k, l] 이라고 생각하고
// 해당 범위 내에서 돌려본다
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        for (let k=1; k<n; k++) {
            for (let l=1; l<n; l++) {
                maxVal = Math.max(maxVal, findSquare(i, j, k, l));
            }
        }
    }
}

console.log(maxVal);