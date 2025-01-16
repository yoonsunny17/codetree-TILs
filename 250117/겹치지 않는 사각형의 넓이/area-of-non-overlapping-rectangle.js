const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let matrix = Array(2001).fill(0).map(() => Array(2001).fill(0))

for (let i=0; i<3; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map((numb) => Number(numb)+1000)

    if (i !== 2) {
        for (let a=x1; a<x2; a++) {
            for (let b=y1; b<y2; b++) {
                matrix[a][b] = 1;
            }
        }
    } else {
        for (let a=x1; a<x2; a++) {
            for (let b=y1; b<y2; b++) {
                matrix[a][b] = 0;
            }
        }
    }
}

let cnt=0;
for (let i=0; i<2001; i++) {
    for (let j=0; j<2001; j++) {
        if (matrix[i][j] === 1) cnt++
    }
}

console.log(cnt)