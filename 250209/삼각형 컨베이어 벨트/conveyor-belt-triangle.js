const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);

const numbs = [];
for (let i=1; i<=3; i++) {
    numbs.push(...input[i].trim().split(' ').map(Number));
}

// t초동안 반복한다
for (let time=0; time<t; time++) {
    numbs.unshift(numbs.pop());
}

for (let i=0; i<3; i++) {
    console.log(numbs.slice(n * i, n * (i+1)).join(' '));
}