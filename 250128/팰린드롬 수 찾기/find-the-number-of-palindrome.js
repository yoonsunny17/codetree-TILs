const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [x, y] = input;

let rlt = 0;
for (let numb=x; numb<=y; numb++) {
    let stringArr = String(numb).split('');

    if (String(numb) === stringArr.reverse().join('')) {
        rlt++;
    }
}

console.log(rlt);