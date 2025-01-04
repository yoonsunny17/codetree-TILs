fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')

let [start, end] = input.map(Number)

let rlt = 0;
for (let i=start; i<=end; i++) {
    let cnt = 0;

    for (let j=1; j<=i; j++) {
        if (i % j === 0) {
            cnt++
        }
    }

    if (cnt === 3) rlt++
}

console.log(rlt)