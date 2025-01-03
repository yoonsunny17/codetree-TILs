fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

for (i of input) {
    console.log(i.toFixed(3))
}
