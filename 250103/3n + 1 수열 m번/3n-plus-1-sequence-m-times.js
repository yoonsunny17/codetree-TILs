fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const m = Number(input[0])

for (let i=1; i<=m; i++) {
    let n = Number(input[i])

    let cnt = 0

    while (n !== 1) {
        if (n%2 === 0) n /= 2
        else n = n * 3 + 1

        cnt++
    }

    console.log(cnt)
}