const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let arr = new Array();

for (let numb of numbs) {
    if (numb === 0) break;

    if (numb % 2 === 0) {
        arr.push(parseInt(numb / 2));
    } else {
        arr.push(numb + 3);
    }
}

console.log(arr.join(' '));