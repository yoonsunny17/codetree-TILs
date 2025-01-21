const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input.shift().split(' ');

let matrix = [];
for (let i=0; i<R; i++) {
    matrix.push(input[i].split(' '));
}

// 가능한 경우의 수 세어줄 변수
let cnt = 0;
// step1. 첫번째 점프에 도달하는 위치
for (let i=1; i<R-1; i++) {
    for (let j=1; j<C-1; j++) {
        // 현재 칸의 색깔이 초기 위치의 색깔과 다른 경우만 점프 가능
        if (matrix[i][j] !== matrix[0][0]) {

            // step2. 두번째 점프에 도달하는 위치   
            for (let k=i+1; k<R-1; k++) {
                for (let l=j+1; l<C-1; l++) {
                    // 현재 칸의 색깔이 이전 칸의 색깔과, 마지막 칸의 색깔과도 다른 경우 점프 가능
                    if (matrix[k][l] !== matrix[i][j] && matrix[k][l] !== matrix[R-1][C-1]) {
                        cnt++;
                    }
                }
            }
        }
    }
}

console.log(cnt);
