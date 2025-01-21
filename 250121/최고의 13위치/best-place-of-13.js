const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());

let matrix = [];
for (let i=0; i<N; i++) {
    matrix.push(input[i].split(' ').map(Number));
}

let rlt = 0;
for (let i=0; i<N; i++) {
    for (let j=0; j<N-2; j++) {
        // 1 * 3 크기의 격자에 들어있는 동전의 갯수 세어보기
        let coins = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2];

        rlt = Math.max(rlt, coins);
    }
}

console.log(rlt);