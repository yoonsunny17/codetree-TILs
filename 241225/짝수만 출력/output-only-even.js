fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')

const [a, b] = input.map(Number)

let n = a;
let arr = []
while (n <= b) {
    if (n % 2 === 0) {
        arr.push(n)
    }
    n++
}

console.log(arr.join(' '))