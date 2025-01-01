fs = require('fs')
n = Number(fs.readFileSync(0).toString())

for (let i=0; i<=n; i++) {
    let str = ''
    for (let j=i-1; j>=0; j--) {
        str += `${n-j} `
    }
    if (i !== 0) console.log(str)
}