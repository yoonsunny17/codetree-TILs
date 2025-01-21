const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const cows = input[1].split(' ').map(Number);

let cnt = 0;
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        for (let k=j+1; k<n; k++) {
            let v1 = cows[i], v2 = cows[j], v3 = cows[k];

            if (i <= j && j <= k && v1 <= v2 && v2 <= v3) {
                cnt++
            } 
        }
    }
}

console.log(cnt);