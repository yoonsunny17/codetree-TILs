fs = require('fs')
str = fs.readFileSync(0).toString().trim()

let [rlt1, rlt2] = ['', '']
if (str.includes('ee')) {
    rlt1 = 'Yes'
} else rlt1 = 'No'
if (str.includes('ab')) {
    rlt2 = 'Yes'
} else rlt2 = 'No'

console.log(rlt1, rlt2)