fs = require('fs')
n = Number(fs.readFileSync(0).toString())

for (let i=1; i<=n; i++) {
    console.log('* '.repeat(n-i+1));
    console.log('* '.repeat(i));
}