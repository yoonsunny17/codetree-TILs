const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const numbs = [];
for (let i=1; i<=2; i++) {
    numbs.push(...input[i].trim().split(' ').map(Number));
}

// t초동안 반복한다
for (let time=0; time<t; time++) {
    // 가장 오른쪽의 숫자를 가장 왼쪽에 넣어준다
    numbs.unshift(numbs.pop());
}

// n개씩 끊어서 출력한다
console.log(numbs.slice(0, n).join(' '));
console.log(numbs.slice(n, 2*n).join(' '));
