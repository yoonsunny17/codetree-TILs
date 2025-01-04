fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

n = Number(input[0])

for (let i=1; i<=n; i++) {
    let [a, b] = input[i].split(' ').map(Number)

    let cnt = 0;
    for (let j=a; j<=b; j++) {
        if (j%2 === 0) cnt += j
    }

    console.log(cnt)
}