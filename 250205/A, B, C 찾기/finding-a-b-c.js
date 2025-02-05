// 숫자들을 오름차순 정렬한다
// 가장 첫번째가 a, 두번째가 b
// 맨 마지막이 a+b+c 이므로, c는 a, b를 빼면 구할 수 있다

const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

numbs.sort((a, b) => a - b);
const a = numbs[0];
const b = numbs[1];
const c = numbs[6]-(a+b);

console.log(a, b, c)
