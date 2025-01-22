const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const matrix = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

for (let i=0; i<n; i++) {
    let cntCoins = 0;
    for (let j=0; j<n-2; j++) {
        console.log("??", matrix[i].slice(j, j+3).reduce((total, curr) => total += curr, 0))
        cntCoins += matrix[i].slice(j, j+3).reduce((total, curr) => total += curr, 0);
        let curR = i;
        let curC = j;
        for (let k=0; k<n; k++) {
            if (k === curR) {
                // 다른 격자와 같은 행을 체크하는 경우
                for (let l=curC+3; l<n-2; l++) {
                    console.log('second', matrix[k].slice(l, l+3).reduce((total, curr) => total += curr, 0))
                    cntCoins += matrix[k].slice(l, l+3).reduce((total, curr) => total += curr, 0);
                }
            } else {
                // 다른 격자와 다른 행을 체크하는 경우
                for (let l=0; l<n-2; l++) {
                    console.log('second', matrix[k].slice(l, l+3).reduce((total, curr) => total += curr, 0))

                    cntCoins += matrix[k].slice(l, l+3).reduce((total, curr) => total += curr, 0);
                }
            }
        }
        console.log(cntCoins)
    }

}

// for (let i=0; i<n; i++) {
//     for (let j=0; j<n-2; j++) {
//         let curR, curC = i, j;

//         for (let k=0; k<n; k++) {
//             for (let l=0; l<n-2; l++) {
//                 if (k === curR) {
//                     console.log(matrix[i].slice(curC, curC+3));
//                 } else {
//                     console.log(matrix[i].slice(l, l+3));
//                 }
//             }
//         }
//     }
// }