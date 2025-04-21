const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b] = input;

let arr = Array(11);
arr[1] = a;
arr[2] = b;

for (let i=3; i<11; i++) {
    arr[i] = arr[i-1] + arr[i-2];
}

let ans = [];
for (let i=1; i<11; i++) {
    ans.push(String(arr[i])[String(arr[i]).length - 1]);
}

console.log(ans.join(" "));