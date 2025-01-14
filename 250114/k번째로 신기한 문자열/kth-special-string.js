const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [n, k, t] = input[0].split(' ')
let arr = []
for (let i=0; i<n; i++) {
    let word = input[i+1]

    if (word.slice(0, t.length) === t) {
        arr.push(word)
    }
}

arr.sort()
console.log(arr[Number(k)-1])
