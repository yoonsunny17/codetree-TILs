const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

const visited = new Array(n).fill(false);

let minVal = Number.MAX_SAFE_INTEGER;
const chooseNumber = (check, row, val) => {
    // n개의 행을 모두 이동했다면 최솟값을 갱신해준다
    if (check === n) {
        minVal = Math.min(minVal, val);
        return;
    }

    for (let j=0; j<n; j++) {
        // 1. 같은 번호로 이동하는 경우는 없다
        // 2. 이미 방문한 곳은 건너뛴다
        // 3. 0인곳은 갈 수 없다
        // 4. 마지막 체크 행이 아닌데 0이면 안된다
        if (j === row) continue;
        if (visited[j]) continue;
        if (matrix[row][j] === 0) continue;
        if (check < n-1 && j === 0) continue;

        visited[j] = true;
        chooseNumber(check+1, j, val+matrix[row][j]);
        visited[j] = false;
    }
}

chooseNumber(0, 0, 0);
console.log(minVal);