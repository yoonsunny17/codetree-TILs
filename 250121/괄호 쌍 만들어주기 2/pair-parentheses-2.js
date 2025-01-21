const fs = require('fs');
const brakets = fs.readFileSync(0).toString().trim().split('');

let cnt = 0;
for (let i=0; i<brakets.length-1; i++) {
    for (let j=i+1; j<brakets.length-1; j++) {
        if (brakets[i] === '(' && brakets[i+1] === '(' && brakets[j] === ')' && brakets[j+1] === ')') {
            cnt++;
        }
    }
}

console.log(cnt);