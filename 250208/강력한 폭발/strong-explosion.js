const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const matrix = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let totalBombs = [];
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (matrix[i][j] === 1) {
            totalBombs.push([i, j]);
        }
    }
}

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

function calcArea (infos) {
    let cnt = 0;

    let visited = Array.from({length: n}, () => Array(n).fill(0));
    // 상 하 좌 우
    dr = [-1, 1, 0, 0];
    dc = [0, 0, -1, 1];

    for (let i=0; i<totalBombs.length; i++) {
        let [r, c] = totalBombs[i]; // 폭탄을 둘 위치
        visited[r][c] = 1;
        let k = infos[i]; // 해당 위치에 둘 폭탄 종류

        if (k === 1) {
            if (inRange(r-1, c)) {
                visited[r-1][c] = 1;
            }

            if (inRange(r-2, c)) {
                visited[r-2][c] = 1;
            }

            if (inRange(r+1, c)) {
                visited[r+1][c] = 1;
            }

            if (inRange(r+2, c)) {
                visited[r+2][c] = 1;
            }
        } else if (k === 2) {
            if (inRange(r-1, c)) {
                visited[r-1][c] = 1;
            }

            if (inRange(r+1, c)) {
                visited[r+1][c] = 1;
            }

            if (inRange(r, c-1)) {
                visited[r][c-1] = 1;
            }

            if (inRange(r, c+1)) {
                visited[r][c+1] = 1;
            }
        } else {
            if (inRange(r-1, c-1)) {
                visited[r-1][c-1] = 1;
            }

            if (inRange(r-1, c+1)) {
                visited[r-1][c+1] = 1;
            }

            if (inRange(r+1, c-1)) {
                visited[r+1][c-1] = 1;
            }

            if (inRange(r+1, c+1)) {
                visited[r+1][c+1] = 1;
            }
        }
    }

    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (visited[i][j] === 1) {
                cnt++;
            }
        }
    }

    return cnt;
}

let maxArea = 0;
let infos = []; // 각 위치에 어떤 폭탄을 둘지 저장할 리스트
function setBombs (currBombs) {
    if (currBombs === totalBombs.length + 1) {
        let area = calcArea(infos);
        maxArea = Math.max(maxArea, area);
        return;
    }

    for (let i=1; i<=3; i++) {
        infos.push(i);
        setBombs(currBombs+1);
        infos.pop();
    }
}

setBombs(1);
console.log(maxArea);