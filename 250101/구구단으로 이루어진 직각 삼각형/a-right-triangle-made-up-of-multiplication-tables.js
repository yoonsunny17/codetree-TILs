fs = require('fs')
n = Number(fs.readFileSync(0).toString())

for (let i=n; i>=1; i--) {
    let str = ''
    for (let j=1; j<=i; j++) {
        str += `${n-i+1} * ${j} = ${(n-i+1)*j}`
    
        if (j !== i) {
            str += ' / '
        }
    }

    console.log(str)
}