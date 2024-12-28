fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

for (let i=0; i<n; i++) {
    let str = '*'.repeat(n - i)
    let spc = ' '.repeat(2 * i)

    console.log(str + spc + str)
}