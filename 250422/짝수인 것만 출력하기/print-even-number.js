const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

let arr = new Array();
for (let numb of numbs) {
    if (numb % 2 === 0) {
        arr.push(numb);
    }
}

console.log(arr.join(' '));