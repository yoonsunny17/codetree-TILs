// 오름차순 정렬한다
// 가장 첫번째 = a, 두번째 = b, 세번째 = c
// 가장 마지막 = a + b + c + d 이므로 a, b, c를 빼면 d를 구할 수 있다

const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

numbs.sort((a, b) => a - b);
const [a, b, c] = [numbs[0], numbs[1], numbs[2]];
const d = numbs[numbs.length - 1] - (a + b + c);

console.log(a, b, c, d);