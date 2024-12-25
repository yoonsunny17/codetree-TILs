fs = require('fs')
a = Number(fs.readFileSync(0).toString())

if (a % 3 === 0) {
    console.log('YES')
} else console.log('NO')

if (a % 5 === 0) {
    console.log('YES')
} else console.log('NO')

