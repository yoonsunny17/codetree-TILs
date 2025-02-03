const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

numbs.sort((a, b) => a - b);

if (numbs[0] + 1 === numbs[1] && numbs[1] + 1 === numbs[2]) {
    // 이미 연속되는 숫자들로 이루어져 있다면 >> 0번 이동 끝
    console.log(0);
} else if (numbs[0] + 2 === numbs[1] || numbs[1] + 2 === numbs[2]) {
    // 두 숫자가 2 차이가 난다면 >> 1번만 이동하면 됨
    console.log(1);
} else {
    // 나머지는 모두 2번이면 끝
    console.log(2)
}