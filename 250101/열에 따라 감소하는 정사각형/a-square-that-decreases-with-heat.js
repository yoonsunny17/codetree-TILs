fs = require('fs')
n = Number(fs.readFileSync(0).toString())

for (let i=0; i<n; i++) {
    let str = ''
    for (let k=n; k>=1; k--) {
        str += `${k} `
    }

    console.log(str)
}