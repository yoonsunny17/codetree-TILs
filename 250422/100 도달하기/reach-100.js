const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let arr = new Array();
arr[0] = 1;
arr[1] = n;

let idx = 2;

while (true) {
    arr.push(arr[idx-1] + arr[idx-2]);

    if (arr[idx] > 100) break;

    idx++;
}

console.log(arr.join(' '));