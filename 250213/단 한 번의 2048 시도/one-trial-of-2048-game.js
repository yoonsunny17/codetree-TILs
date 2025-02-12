// 일단 오른쪽 방향으로 밀리는 경우만 생각해보자
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const matrix = Array.from({length: 4}, (_, i) => input[i].trim().split(' ').map(Number));
const dir = input[4];

// dir === R: row 한줄씩, 거꾸로 확인한다
if (dir === 'R') {
    for (let row of matrix) {
        let tmp = [];

        for (let i=3; i>0; i--) {
            if (row[i] === 0) {
                continue;
            }

            if (row[i] !== row[i-1]) {
                // 앞에거랑 다른 숫자라면, 그냥 넣어준다
                tmp.push(row[i]);
            } else {
                // 앞에거랑 같은 숫자라면, 더해서 넣어준다
                tmp.push(row[i] * 2);
                row[i-1] = 0;
            }
        }

        tmp.push(row[0]);

        while (tmp.length < 4) {
            tmp.push(0);
        }
        
        console.log(tmp.reverse().join(' '));
    }
}

// dir === L: row 한줄씩, 정방향으로 확인한다
if (dir === 'L') {
    for (let row of matrix) {
        let tmp = [];

        for (let i=0; i<3; i++) {
            if (row[i] === 0) {
                continue;
            }

            if (row[i] !== row[i+1]) {
                // 앞에거랑 다른 숫자라면, 그냥 넣어준다
                tmp.push(row[i]);
            } else {
                // 앞에거랑 같은 숫자라면, 더해서 넣어준다
                tmp.push(row[i] * 2);
                row[i+1] = 0;
            }
        }

        tmp.push(row[3]);

        while (tmp.length < 4) {
            tmp.push(0);
        }
        
        console.log(tmp.join(' '));
    }
}

// dir === D: col 한줄씩, 거꾸로 확인한다
const transformMatrix = (inputMatrix) => {
    let outputMatrix = Array.from({ length: 4 }, () => Array(4).fill(0));

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            outputMatrix[col][3 - row] = inputMatrix[row][col];
        }
    }
    
    return outputMatrix;
}

if (dir === 'D') {
    let rlt = [];

    for (let j=0; j<=3; j++) {
        let col = [];
        for (let i=0; i<=3; i++) {
            col.push(matrix[i][j]);
        }

        let tmp = [];

        for (let k=3; k>0; k--) {
            if (col[k] === 0) {
                continue;
            }

            if (col[k] !== col[k-1]) {
                tmp.push(col[k]);
            } else {
                tmp.push(col[k] * 2);
                col[k-1] = 0;
            }
        }
        
        tmp.push(col[0]);

        while (tmp.length < 4) {
            tmp.push(0)
        }

        rlt.push(tmp.reverse());

    }
    
    let newMatrix = transformMatrix(rlt);

    for (let row of newMatrix) {
        console.log(row.reverse().join(' '));
    }
}

// dir === U: col 한줄씩, 정방향으로 확인한다
if (dir === 'U') {
    let rlt = [];

    for (let j=0; j<=3; j++) {
        let col = [];
        for (let i=0; i<=3; i++) {
            col.push(matrix[i][j]);
        }

        let tmp = [];

        for (let k=0; k<3; k++) {
            if (col[k] === 0) {
                continue;
            }

            if (col[k] !== col[k+1]) {
                tmp.push(col[k]);
            } else {
                tmp.push(col[k] * 2);
                col[k+1] = 0;
            }
        }
        
        tmp.push(col[3]);

        while (tmp.length < 4) {
            tmp.push(0)
        }

        rlt.push(tmp.reverse());

    }
    
    let newMatrix = transformMatrix(rlt);

    for (let idx=3; idx>=0; idx--) {
        console.log(newMatrix[idx].reverse().join(' '))
    }
}