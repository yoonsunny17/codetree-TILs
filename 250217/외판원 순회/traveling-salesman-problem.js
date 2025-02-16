const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

const visited = new Array(n).fill(false);

let minVal = Number.MAX_SAFE_INTEGER;
const chooseNumber = (row, val) => {
    // n개의 행을 모두 이동했다면 최솟값 갱신해준다
    if (row === n) {
        minVal = Math.min(minVal, val);
        return;
    }

    for (let j=0; j<n; j++) {
        // 같은 번호로 이동하는 경우는 없다
        // 이미 방문한 곳이면 건너뛴다
        if (j === row) continue;
        if (visited[j]) continue;

        visited[j] = true;
        chooseNumber(row+1, val+matrix[row][j]);
        visited[j] = false;
    }
}

chooseNumber(0, 0);
console.log(minVal);