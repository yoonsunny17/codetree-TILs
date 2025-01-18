const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let OFFSET = 1000;
let matrix = Array(2001).fill(0).map(() => Array(2001).fill(0));
for (let i=0; i<2; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);

    // 첫번째 사각형은 +1
    // 두번째 사각형은 -1
    if (i === 0) {
        for (let a=x1+OFFSET; a<x2+OFFSET; a++) {
            for (let b=y1+OFFSET; b<y2+OFFSET; b++) {
                matrix[a][b] += 1;
            }
        }
    } else {
        for (let a=x1+OFFSET; a<x2+OFFSET; a++) {
            for (let b=y1+OFFSET; b<y2+OFFSET; b++) {
                matrix[a][b] -= 1;
            }
        }
    }
}

let [maxX, maxY, minX, minY] = [-Infinity, -Infinity, Infinity, Infinity];

for (let i=0; i<2001; i++) {
    for (let j=0; j<2001; j++) {
        if (matrix[i][j] === 1) {
            if (maxX < i) {
                maxX = i;
            }

            if (maxY < j) {
                maxY = j;
            }

            if (minX > i) {
                minX = i;
            }

            if (minY > j) {
                minY = j;
            }
        }
    }
}

console.log((maxX-minX+1) * (maxY-minY+1));