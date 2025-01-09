fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input.slice(0, input.length-1)
let alpha = input[input.length-1]

let rlt = []
for (let str of arr) {
    if (str[str.length-1] === alpha) {
        rlt.push(str)
    }
}

console.log(rlt.length > 0 ? rlt.join('\n') : 'None')