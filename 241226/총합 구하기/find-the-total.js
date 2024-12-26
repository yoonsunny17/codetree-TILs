fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')
let [a, b] = input.map(Number)

let cnt = 0;
for (i=a; i<=b; i++) {
    if (i%6 === 0 && i%8 !== 0) {
        cnt += i
    }
}

console.log(cnt)