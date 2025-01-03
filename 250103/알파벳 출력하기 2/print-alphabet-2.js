fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

let code = 65

for (let i=1; i<=n; i++) {
    let rlt = ''
    rlt += '  '.repeat(i-1)
    for (let j=1; j<=n-i+1; j++) {
        rlt += `${String.fromCharCode(code)} `
        if (code === 90) code = 65
        else code++
    }
    console.log(rlt)
}