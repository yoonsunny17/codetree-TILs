fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)

let arr = Array(n).fill(0).map(() => Array(n).fill(0))
for (let i=1; i<m+1; i++) {
    let [r, c] = input[i].split(' ').map(Number)

    arr[r-1][c-1] = 1
}

for (let row of arr) {
    let str = ''
    for (let elem of row) {
        str += `${elem} `
    }
    console.log(str)
}