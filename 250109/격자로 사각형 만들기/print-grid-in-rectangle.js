fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

let arr = Array(n).fill(0).map(() => Array(n).fill(0))
for (let i=0; i<n; i++) {
    arr[i][0] = 1
    arr[0][i] = 1
}

for (let i=1; i<n; i++) {
    for (let j=1; j<n; j++) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1] + arr[i-1][j-1]
    }
}

for (let row of arr) {
    let str = ''
    for (let elem of row) {
        str += `${elem} `        
    }
    console.log(str)
}