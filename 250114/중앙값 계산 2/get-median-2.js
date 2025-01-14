const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const numbs = input[1].split(' ').map(Number)

let arr = []
for (let i=0; i<n; i++) {
    if (i%2 === 0) {
        let tmp = numbs.slice(0, i+1)
        tmp.sort((a, b) => a-b)
        arr.push(tmp[parseInt(tmp.length/2)])
    }
}

console.log(arr.join(' '))