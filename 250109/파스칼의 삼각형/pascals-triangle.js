fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

let arr = Array(n).fill(0).map(() => Array(n).fill(0))

for (let i=0; i<n; i++) {
    arr[i][0] = 1
    arr[i][i] = 1

    for (let j=1; j<i; j++) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    }
}

for (let row of arr) {
    let str = ''
    for (let elem of row) {
        if (elem !== 0) {
            str += `${elem} `
        }
    }
    console.log(str)
}