const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const matrix = Array.from({length: 19}, (_, i) => input[i].split(' ').map(Number));

// 가로로 확인
const garoCheck = () => {
    for (let i=0; i<19; i++) {
        for (let j=0; j<=14; j++) {
            let slice = matrix[i].slice(j, j+5);

            let [color, cnt] = [0, 0];

            slice.forEach((v) => {
                if (v === 1) {
                    color--;
                    cnt++;
                } else if (v === 2) {
                    color++;
                    cnt++;
                } else {
                    color = 0;
                    cnt = 0;
                }
            })

            if ((color === 5 || color === -5) && cnt === 5) {
                winnerColor = color;
                r = i+1, c = j+3;
                return;
            }
        }
    }
}

// 세로로 확인
const seroCheck = () => {
    for (let j=0; j<19; j++) {
        for (let i=0; i<=14; i++) {
            const slice = matrix.slice(i, i+5).map(row => row[j]);

            let [color, cnt] = [0, 0];

            slice.forEach((v) => {
                if (v === 1) {
                    color--;
                    cnt++;
                } else if (v === 2) {
                    color++;
                    cnt++;
                } else {
                    color = 0;
                    cnt = 0;
                }
            })

            if ((color === 5 || color === -5) && cnt === 5) {
                winnerColor = color;
                r = i+3, c = j+1;
                return;
            }
        }
    }

}

// 대각선으로 확인
const diagonalCheck = () => {
    // 오른쪽 아래 방향 대각선
    for (let i=0; i<=14; i++) {
        for (let j=0; j<=14; j++) {
            const slice = [
                matrix[i][j],
                matrix[i+1][j+1],
                matrix[i+2][j+2], 
                matrix[i+3][j+3], 
                matrix[i+4][j+4]
            ]

            let [color, cnt] = [0, 0];

            slice.forEach((v) => {
                if (v === 1) {
                    color--;
                    cnt++;
                } else if (v === 2) {
                    color++;
                    cnt++;
                } else {
                    color = 0;
                    cnt = 0;
                }
            })

            if ((color === 5 || color === -5) && cnt === 5) {
                winnerColor = color;
                r = i+3, c = j+3;
                return;
            }
        }
    }

    // 왼쪽 아래 방향 대각선
    for (let i=0; i<=14; i++) {
        for (let j=4; j<19; j++) {
            const slice = [
                matrix[i][j],
                matrix[i+1][j-1],
                matrix[i+2][j-2],
                matrix[i+3][j-3],
                matrix[i+4][j-4]
            ]

            let [color, cnt] = [0, 0];

            slice.forEach((v) => {
                if (v === 1) {
                    color--;
                    cnt++;
                } else if (v === 2) {
                    color++;
                    cnt++;
                } else {
                    color = 0;
                    cnt = 0;
                }
            })

            if ((color === 5 || color === -5) && cnt === 5) {
                winnerColor = color;
                r = i+3, c = j-1;
                return;
            }
        }
    }
}

let [winnerColor, r, c] = [0, -1, -1];

garoCheck();
seroCheck();
diagonalCheck();

if (winnerColor === 5) {
    console.log(2);
} else if (winnerColor === -5) {
    console.log(1);
}

if (r === -1 || c === -1) {
    console.log(0);
} else {
    console.log(r, c);
}