fs = require('fs')
n = Number(fs.readFileSync(0).toString())

let i = 1;
let cnt = 0;
while (n > 1) {
    if (n <= 1) {
        break;
    }
    n /= i
    i++
    cnt++
}

console.log(cnt)