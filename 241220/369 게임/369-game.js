const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

let rlt = []

for (let i=1; i<=n; i++) {
    let numb = String(i)

    if (i % 3 === 0 || ['3', '6', '9'].some(digit => numb.includes(digit))) {
        rlt.push(0)
    } else {
        rlt.push(i)
    }
}

console.log(rlt.join(' '))