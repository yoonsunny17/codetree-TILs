const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const bombs = Array.from({length: n}, (_, i) => Number(input[i+1]));

let maxVal = -1;
for (let i=0; i<n-k+1; i++) {
    let checkBombs = bombs.slice(i, i+k+1);
    
    const frequency = checkBombs.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    
    // 한개 이상의 숫자들만 모은다
    const duplicates = Object.keys(frequency).filter(num => frequency[num] > 1).map(Number);

    maxVal = Math.max(maxVal, ...duplicates);
}

console.log(maxVal);