fs = require('fs')
str = fs.readFileSync(0).toString().trim()

let idx = -1;
const arr = ['L', 'E', 'B', 'R', 'O'];

for (let i=0; i<arr.length; i++) {
    if (arr[i] === str) {
        idx = i
    }
}

console.log(idx === -1 ? 'None' : idx)