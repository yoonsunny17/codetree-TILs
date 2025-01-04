fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ')

let [start, end] = input.map(Number)

let cnt = 0
for (let i=start; i<=end; i++) {
    let numbs = []

    for (let j=1; j<i; j++) {
        if (i % j === 0) {
            numbs.push(j)
        }
    }
    
    if (numbs.reduce((total, curr) => total + curr, 0) === i) cnt++
}

console.log(cnt)