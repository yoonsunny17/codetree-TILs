fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [n, m] = input
const arr = Array(n).fill(0).map(() => Array(m).fill(0));

let numb = 1

// (행+열) 합이 같은 대각선들끼리 처리
for (let sum=0; sum<n+m-1; sum++) {
    let startCol = Math.min(sum, m-1)
    let startRow = Math.max(0, sum-(m-1))

    while (startCol >= 0 && startRow < n) {
        arr[startRow][startCol] = numb++
        startRow++
        startCol--
    }
}

for (let row of arr) {
    let str = ''
    for (let elem of row) {
        str += `${elem} `
    }
    console.log(str)
}