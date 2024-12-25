fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')
const [b, a] = input.map(Number)

let n = b;
let arr = [];
while (n >= a) {
    if (n % 2 === 0) {
        arr.push(n)
    }
    n--
}

console.log(arr.join(' '))