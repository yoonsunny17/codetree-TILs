fs = require('fs')
input = fs.readFileSync(0).toString().split(' ')

let [a, n] = input.map(Number)

i = 1;
while (i <= n) {
    a = a + n
    i++

    console.log(a)
}