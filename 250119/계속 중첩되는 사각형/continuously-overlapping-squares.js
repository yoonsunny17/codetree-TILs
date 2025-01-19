const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let OFFSET = 100;
const n = Number(input[0]);

let matrix = Array(201).fill('').map(() => Array(201).fill(''));
for (let i=0; i<n; i++) {
    const [x1, y1, x2, y2] = input[i+1].split(' ').map((numb) => Number(numb)+OFFSET);

    // 홀수번째는 빨간색, 짝수번째는 파란색
    if (i % 2 === 0) {
        for (let i=x1; i<x2; i++) {
            for (let j=y1; j<y2; j++) {
                matrix[i][j] = 'R';
            }
        }
    } else {
        for (let i=x1; i<x2; i++) {
            for (let j=y1; j<y2; j++) {
                matrix[i][j] = 'B';
            }
        }
    }
}

let cnt = 0;
for (let i=0; i<201; i++) {
    for (let j=0; j<201; j++) {
        if (matrix[i][j] === 'B') cnt++;
    }
}

console.log(cnt);