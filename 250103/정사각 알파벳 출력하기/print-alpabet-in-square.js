fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

let code = 65

for (let i=0; i<n; i++) {
    let rlt = ''
    for (let j=0; j<n; j++) {
        rlt += String.fromCharCode(code)
        code++
    }
    console.log(rlt)
}