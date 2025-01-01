fs = require('fs')
input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = input

for (let i=2; i<=8; i+=2) {
    let str = ''
    for (let j=b; j>=a; j--) {
        str += `${j} * ${i} = ${i*j}`
        if (j !== a) str += ' / '
    }

    console.log(str)
}
