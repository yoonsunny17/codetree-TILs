const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input.shift().split(' ');

let matrix = [];
for (let i=0; i<R; i++) {
    matrix.push(input[i].split(' '));
}

// 초기 위치 설정
let [r, c, curr] = [0, 0, matrix[0][0]];

let cnt = 0;
// step1. 첫번째 점프에 도달하는 위치
for (let i=1; i<R-1; i++) {
    for (let j=1; j<C-1; j++) {
        if (i > r && j > c && matrix[i][j] !== curr) {
            r = i, c = j, curr = matrix[i][j];

            // step2. 두번째 점프에 도달하는 위치   
            for (let k=i+1; k<R-1; k++) {
                for (let l=j+1; l<C-1; l++) {
                    if (k > r && l > c && matrix[k][l] !== curr) {
                        cnt++;
                    }
                }
            }
        }
    }
}

console.log(cnt);
