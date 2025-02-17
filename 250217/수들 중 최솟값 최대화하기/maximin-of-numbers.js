const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const matrix = Array.from({length: n}, (_, i) => input[i].trim().split(' ').map(Number));

const INIT_NUMB = 10001;
const visited = new Array(n).fill(false);
let maxVal = -1;

const chooseNumber = (row, minVal) => {
    // n열까지 모두 확인했다면, 지금까지 나온 최솟값으로 최댓값을 갱신한다.
    if (row === n) {
        maxVal = Math.max(maxVal, minVal);
        return;
    }

    for (let j=0; j<n; j++) {
        // 이미 방문한 숫자는 넘어간다
        if (visited[j]) continue;

        visited[j] = true;
        chooseNumber(row+1, Math.min(matrix[row][j], minVal));
        visited[j] = false;
    }
}

chooseNumber(0, INIT_NUMB);
console.log(maxVal);