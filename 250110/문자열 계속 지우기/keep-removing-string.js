fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = input
while (true) {
    let flag = false

    for (let i=0; i<=a.length-b.length; i++) {
        if (a.slice(i, i+b.length) === b) {
            a = a.slice(0, i) + a.slice(i+b.length)
            flag = true
            break;
        }
    }

    if (!flag) break;
}

console.log(a);