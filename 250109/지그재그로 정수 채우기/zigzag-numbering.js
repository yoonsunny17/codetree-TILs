fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')

let [n, m] = input.map(Number)
let arr = Array(n).fill(0).map(() => Array(m).fill(0))

let numb = 0;
for (let j=0; j<m; j++) {
    if (j%2 === 0) {
        for (let i=0; i<n; i++) {
            arr[i][j] = numb
            numb++
        }
    } else {
        for (let i=n-1; i>=0; i--) {
            arr[i][j] = numb
            numb++
        }
    }
}

for (let row of arr) {
    let str = ''
    for (let elem of row) {
        str += `${elem} `
    }
    console.log(str)
}