fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')

let [a, b] = input.map(Number);

let cnt = 0;

for (let i=a; i<=b; i++) {
    if (1920 % i === 0 && 2880 % i === 0) {
        cnt++
    }
}

console.log(cnt)