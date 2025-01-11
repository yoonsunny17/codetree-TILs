const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let [str, q] = input[0].split(' ')
for (let i=1; i<=q; i++) {
    let k = Number(input[i])

    if (k === 1) {
        str = str.slice(1) + str[0]
    } else if (k === 2) {
        str = str[str.length-1] + str.slice(0, str.length-1)
    } else {
        str = str.split('').reverse().join('')
    }
    console.log(str)
}
