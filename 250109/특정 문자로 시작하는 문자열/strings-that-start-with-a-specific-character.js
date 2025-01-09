fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])

let arr = []
for (let i=1; i<=n; i++) {
    arr.push(input[i])
}

let alpha = input[n+1]
let rlt = []
for (let i=0; i<n; i++) {
    if (arr[i][0] === alpha) {
        rlt.push(arr[i].length)
    }
}

console.log(rlt.length, ((rlt.reduce((total, curr) => total += curr, 0))/rlt.length).toFixed(2))