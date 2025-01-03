fs = require('fs')
n = Number(fs.readFileSync(0).toString().trim())

for (let i=1; i<=n; i++) {
    let rlt = '';
    for (let j=1; j<=n-i+1; j++) {
        rlt += `${i} * ${j} = ${i*j}`;
        if (j < n - i + 1) {
            rlt += ' / '
        }
    }

    console.log(rlt)
}