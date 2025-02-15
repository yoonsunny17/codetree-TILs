const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

// 범위 안에 1이 있다면 블럭이 놓여질 수 없다
const checkBlock = (row) => {
    if (matrix[row].slice(k-1, k+m-1).includes(1)) {
        return false;
    }
    return true;
}

// 각 row마다, (k-1, k+m-1) 범위를 체크한다
for (let i=n-1; i>=0; i--) {
    if (checkBlock(i)) {
        for (let j=k-1; j<k+m-1; j++) {
            matrix[i][j] = 1;
        }
        // 놓을 자리 찾았으면 끝!
        break;
    }
}

matrix.map((row) => console.log(row.join(' ')));
