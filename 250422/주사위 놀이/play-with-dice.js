const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let arr = Array(7).fill(0);

for (let numb of numbs) {
    arr[numb]++;
}

for (let i=1; i<=6; i++) {
    console.log(`${i} - ${arr[i]}`);
}