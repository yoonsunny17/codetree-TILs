fs = require('fs')
str = fs.readFileSync(0).toString().trim()

let arr = str.split('')
let [a, b] = [arr[0], arr[1]]
for (let i=0; i<arr.length; i++) {
    if (arr[i] === b) {
        arr[i] = a
    }
}

console.log(arr.join(''))