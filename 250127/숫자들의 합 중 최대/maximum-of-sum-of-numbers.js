const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [x, y] = input;

let maxVal = 0;
for (let numb=x; numb<=y; numb++) {
    let arr = Array.from(String(numb), Number);
    
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    maxVal = Math.max(maxVal, sum);
}

console.log(maxVal);