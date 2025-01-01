fs = require('fs')
n = Number(fs.readFileSync(0).toString())

let numb = 1;
for (let i=1; i<=n; i++) {
    let str = ''

    for (let j=1; j<=n; j++) {
        str += `${numb} `
        if (i%2 === 0) {
            if (j===n) {
                numb++
            } else numb += 2
        } else {
            if (j===n) {
                numb += 2
            } else numb++
        }
    }

    console.log(str)
}