const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

// 행과 열에 대해 방문 체크 리스트를 따로 만들어준다
const visited_row = new Array(n).fill(false);
const visited_col = new Array(n).fill(false);

let maxVal = 0;
let val = 0;
const chooseNumber = (curr) => {
    if (curr === n+1) {
        maxVal = Math.max(maxVal, val);
        return;
    }

    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            // 만약 i또는 j가 하나라도 방문 처리가 되어 있다면 건너뛴다
            if (visited_row[i] || visited_col[j]) continue;

            visited_row[i] = true;
            visited_col[j] = true;
            val += matrix[i][j];

            chooseNumber(curr+1);

            visited_row[i] = false;
            visited_col[j] = false;
            val -= matrix[i][j];
        }
    }
}

chooseNumber(1);
console.log(maxVal);