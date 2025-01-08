fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')

let [n, m] = input.map(Number)

let arr = Array(n).fill(0).map(() => Array(m).fill(0))

let num = 1
for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        arr[i][j] = num
        num++
    }
}

for (let row of arr) {
    let str = ''
    for (let col of row) {
        str += `${col} `
    }
    console.log(str)
}