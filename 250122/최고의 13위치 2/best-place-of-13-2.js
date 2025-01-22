const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const matrix = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let maxVal = 0;
for (let i=0; i<n; i++) {
    let firstCheck = [];
    let firstMax = 0;
    for (let j=0; j<n-2; j++) {
        firstCheck = matrix[i].slice(j, j+3);

        // 첫번째 검사 시 나올 수 있는 동전의 최댓값
        if (firstCheck.reduce((total, curr) => total + curr, 0) > firstMax) {
            firstMax = firstCheck.reduce((total, curr) => total + curr, 0);
        }

        for (let k=0; k<n; k++) {
            let secondCheck = [];
            let secondMax = 0;
            if (k === i) {
                for (let l=j+3; l<n-2; l++) {
                    secondCheck = matrix[k].slice(l, l+3);
                }
            } else {
                for (let l=0; l<n-2; l++) {
                    secondCheck = matrix[k].slice(l, l+3);
                }
            }

            // 두번째 검사 시 나올 수 있는 동전의 최댓값
            if (secondCheck.reduce((total, curr) => total + curr, 0) > secondMax) {
                secondMax = secondCheck.reduce((total, curr) => total + curr, 0);
            }

            // 두 번의 검사에서 나오는 최댓값 갱신
            if (maxVal < firstMax + secondMax) {
                maxVal = firstMax + secondMax;
            }
        }
    }
}

console.log(maxVal);