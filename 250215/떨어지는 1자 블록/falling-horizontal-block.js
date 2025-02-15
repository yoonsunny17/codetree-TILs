const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

// 범위 안에 1이 있다면 블럭이 놓여질 수 없다
const checkBlock = (row) => {
    for (let j=k-1; j<k+m-1; j++) {
        if (matrix[row][j] === 1) {
            return false;
        }
    }
    return true;
}

// 위에서 아래로 탐색하면서, 최대로 블럭이 떨어질 수 있는 row를 찾는다
let check = [];
let row = 0;
while (row < n) {
    if (!checkBlock(row)) {
        break;
    }

    check.push(row);
    row++;
}

let maxRow = check[check.length - 1];
for (let j=k-1; j<k+m-1; j++) {
    matrix[maxRow][j] = 1;
}

matrix.forEach((row) => console.log(row.join(' ')));