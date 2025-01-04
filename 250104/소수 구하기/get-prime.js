fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

let arr = [];
for (let i=1; i<=n; i++) {
    let cnt = 0;
    for (let j=1; j<=i; j++) {
        if (i%j === 0) {
            cnt++
        }
    }

    if (cnt === 2) arr.push(i)
}

console.log(arr.join(' '))