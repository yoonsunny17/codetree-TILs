const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = input

let cnt = 0
while (true) {
    if (a === b) break;

    if (cnt === a.length) break;

    a = a[a.length-1] + a.slice(0, a.length-1)
    cnt++
}

console.log(cnt === a.length ? -1 : cnt)