const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let cnt = Array(10).fill(0);

for (let numb of numbs) {
    if (numb === 0) break;

    if (numb >= 10) {
        let n = numb.toString()[0];
        
        cnt[n]++;
    } 
}

for (let i=1; i<=9; i++) {
    console.log(`${i} - ${cnt[i]}`);
}