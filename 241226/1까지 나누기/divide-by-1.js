fs = require('fs')
n = Number(fs.readFileSync(0).toString())

let i = 1;
let cnt = 0;
while (n > 1) {
    n = Math.floor(n / i);
    cnt++;
    i++;
}

console.log(cnt)