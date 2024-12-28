fs = require('fs')
n = Number(fs.readFileSync(0).toString())

for (let i=0; i<n; i++) {
    console.log('*'.repeat(2*i + 1))
}