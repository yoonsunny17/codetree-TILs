fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = input

while (a.length > b.length) {
    for (let i=0; i<a.length; i++) {
        if (a.slice(i, i+b.length) === b) {
            a = a.slice(0, i) + a.slice(i+b.length, a.length)
        }
    }
}

console.log(a)