// x 좌표들 중 최솟값, 최댓값을 구한 후, 둘의 차를 계산한다
// y 좌표들 중 최솟값, 최댓값을 구한 후, 둘의 차를 계산한다
// 위에서 계산한 두 값 중 최댓값이 정사각형의 한 변의 길이가 된다

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

const [maxX, minX] = [Math.max(x1, x2, a1, a2), Math.min(x1, x2, a1, a2)];
const [maxY, minY] = [Math.max(y1, y2, b1, b2), Math.min(y1, y2, b1, b2)];

const dist = Math.max(Math.abs(maxX - minX), Math.abs(maxY - minY));

console.log(dist**2);