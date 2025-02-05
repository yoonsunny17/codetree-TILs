// 왼쪽 하단 >> 최솟값
// 오른쪽 상단 >> 최댓값

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

const [left_x, left_y] = [Math.min(x1, a1), Math.min(y1, b1)];
const [right_x, right_y] = [Math.max(x2, a2), Math.max(y2, b2)];

console.log((right_x - left_x) * (right_y - left_y));