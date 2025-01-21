const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const string = input[1].split('');

let cnt = 0;
for (let i=0; i<N-2; i++) {
    for (let j=i+1; j<N-1; j++) {
        for (let k=j+1; k<N; k++) {
            if (string[i] === 'C' && string[j] === 'O' && string[k] === 'W') {
                cnt++;
            }
        }
    }
}

console.log(cnt);