fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

let numb = 1
let arr = Array(n).fill(0).map(() => Array(n).fill(0))

let check = 0
for (let j=n-1; j>=0; j--) {
    if (check%2) {
        for (let i=0; i<n; i++) {
            arr[i][j] = numb++
        }
    } else {
        for (let i=n-1; i>=0; i--) {
            arr[i][j] = numb++
        }
    }
    check++
}

for (let row of arr) {
    let str = ''
    for (let elem of row) {
        str += `${elem} `
    }
    console.log(str)
}