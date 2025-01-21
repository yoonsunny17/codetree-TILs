const fs = require('fs');
const brakets = fs.readFileSync(0).toString().trim().split('');

let n = brakets.length;
let cnt = 0;
for (let i=0; i<n-1; i++) {
    if (brakets[i] === '(') {
        // 여는 괄호를 찾았으면, 그 다음 인덱스부터 닫는 괄호 찾아보기
        for (let j=i+1; j<n; j++) {
            if (brakets[j] === ')') {
                cnt++
            }
        }
    }
}

console.log(cnt);