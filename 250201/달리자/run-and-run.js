const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const list_a = input[1].split(' ').map(Number);
const list_b = input[2].split(' ').map(Number);

let cnt = 0;
let idx = 0;
while (idx < n-1) {
    let move = list_a[idx] - list_b[idx]; // 현재 집에서 이동한 사람 수
    list_a[idx] = list_b[idx];
    list_a[idx+1] += move;
    cnt += move;

    idx++;
}

console.log(cnt);