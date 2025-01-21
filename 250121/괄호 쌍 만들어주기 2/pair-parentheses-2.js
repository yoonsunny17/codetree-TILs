const fs = require('fs');
const brakets = fs.readFileSync(0).toString().trim().split('');

let rlt = 0;
for (let i=0; i<brakets.length-1; i++) {
    let check = 0; // 열린괄호 세어 줄 
    for (let j=i; j<i+2; j++) {
        if (brakets[j] === '(') {
            check++;
        }
        if (check === 2) {
            for (let k=j+1; k<brakets.length-1; k++) {
                if (brakets[k] === ')' && brakets[k+1] === ')') {
                    rlt++;
                }
            }
        }
    }

}

console.log(rlt);