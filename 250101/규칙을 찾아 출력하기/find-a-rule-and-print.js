fs = require('fs')
n = Number(fs.readFileSync(0).toString())

let rlt = ''

for (let i=0; i<n; i++) {
    rlt += '* '
}
rlt += '\n'

for (let i=1; i<n-1; i++) {
    for (let j=0; j<i; j++) {
        rlt += '* '
    }

    for (let j=0; j<n-i-1; j++) {
        rlt += '  '
    }

    rlt += '*\n'
}

if (n > 1) {
    for (let i=0; i<n; i++) {
        rlt += '* '
    }
}

console.log(rlt)