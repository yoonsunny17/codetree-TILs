const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

let rlt = 0;

// 각 숫자에 대해 등차수열 개수를 구해본다
for (let x=1; x<=100; x++) {
    // 숫자 두개를 정해서, 그 숫자들과 등차수열이 이루어지는 개수를 센다
    let cnt = 0;
    
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            if (numbs[i] + numbs[j] === 2 * x) {
                cnt++;
            }
        }
    }

    rlt = Math.max(rlt, cnt);
}

console.log(rlt);