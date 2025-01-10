fs = require('fs')
str = fs.readFileSync(0).toString().trim()

let rlt = ''
let tmp = ''
let cnt = 0
for (let s of str) {
    if (tmp !== s) {
        if (tmp !== '') {
            rlt += `${tmp}${cnt}`
        }
        tmp = s
        cnt = 1
    } else {
        cnt++
    }
}

rlt += `${tmp}${cnt}`
console.log(`${rlt.length}\n${rlt}`)