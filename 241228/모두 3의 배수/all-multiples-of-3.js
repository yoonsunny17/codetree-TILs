fs = require('fs')
arr = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let cnt = 0;
for (i of arr) {
    if (i % 3 === 0) cnt++
}

console.log(cnt === arr.length ? 1 : 0)