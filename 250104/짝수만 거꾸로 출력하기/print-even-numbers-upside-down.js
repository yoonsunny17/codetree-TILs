fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let numbs = input[1].split(' ').map(Number)
numbs.reverse()

let arr = []
for (let numb of numbs) {
    if (numb%2 === 0) {
        arr.push(numb)
    }
}

console.log(arr.join(' '))