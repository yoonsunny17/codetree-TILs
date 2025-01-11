const fs = require('fs')
let str = fs.readFileSync(0).toString().trim()

console.log(str)

let n = str.length
for (i=0; i<n; i++) {
    str = str[n-1] + str.slice(0, n-1)

    console.log(str)
}