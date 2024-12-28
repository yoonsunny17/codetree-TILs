fs = require('fs')
n = Number(fs.readFileSync(0).toString())

let cnt = 0;

while (n < 1000) {
    cnt++
    if (n%2 === 0) {
        n = n * 3 + 1
    } else {
        n = n * 2 + 2
    }
}

console.log(cnt)