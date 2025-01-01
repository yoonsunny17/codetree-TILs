fs = require('fs')
n = Number(fs.readFileSync(0).toString())

let numb = 9
for (let i=0; i<n; i++) {
    let str = ''
    for (let j=0; j<n; j++) {
        str += numb
        numb--

        if (numb === 0) numb = 9
    }
    console.log(str)
}