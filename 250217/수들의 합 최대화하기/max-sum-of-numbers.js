const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

const visited = new Array(n).fill(false);

let maxVal = -1;

const chooseNumber = (row, val) => {
    // n번째 열까지 모두 확인했다면 최댓값 갱신해준다
    if (row === n) {
        maxVal = Math.max(maxVal, val);
        return;
    }

    // 각 row마다 검사해본다
    for (let j=0; j<n; j++) {
        // j위치에 이미 방문한 적 있다면 건너뛴다
        if (visited[j]) continue;
        
        visited[j] = true;
        chooseNumber(row+1, val+matrix[row][j]);
        visited[j] = false;
    }
}

chooseNumber(0, 0);
console.log(maxVal);