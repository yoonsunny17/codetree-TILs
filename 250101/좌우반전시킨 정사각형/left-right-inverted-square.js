fs = require('fs')
n = Number(fs.readFileSync(0).toString())

for (let i=1; i<=n; i++) {
    let str = ''
    for (let j=n; j>=1; j--) {
        str += `${i * j} `
    }

    console.log(str)
}