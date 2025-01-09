fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

let numb = 1;
let arr = Array(n).fill(0).map(() => Array(n).fill(0))

for (let j=0; j<n; j++) {
    for (let i=0; i<n; i++) {
        arr[i][j] = numb
        numb++
    }
}

for (let row of arr) {
    let str = ''
    for (let elem of row){
        str += `${elem} `
    }
    console.log(str)
}