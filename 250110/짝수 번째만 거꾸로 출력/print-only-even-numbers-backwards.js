fs = require('fs')
str = fs.readFileSync(0).toString().trim()

let arr = []
for (let i=0; i<str.length; i++) {
    if (i%2) arr.push(str[i])
}

arr.reverse()
console.log(arr.join(''))