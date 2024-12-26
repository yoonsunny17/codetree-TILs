fs = require('fs')
a = Number(fs.readFileSync(0).toString().trim())

let arr = []
for (let i=1; i<=a; i++) {
    if (i%2 === 0 && i%4 !==0) {
        continue
    } else if (parseInt(i/8) % 2 === 0) {
        continue
    } else if (i%7 < 4) {
        continue
    }

    arr.push(i)
}

console.log(arr.join(' '))