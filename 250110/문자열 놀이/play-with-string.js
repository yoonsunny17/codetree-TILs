fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let [s, q] = input[0].split(' ')
let arr = s.split('')
for (let i=1; i<=q; i++) {
    let [n, a, b] = input[i].split(' ')

    if (n === '1') {
        let tmp = arr[a-1]
        arr[a-1] = arr[b-1]
        arr[b-1] = tmp
    } else {
        for (let i=0; i<arr.length; i++) {
            if (arr[i] === a) {
                arr[i] = b
            }
        }
    }

    console.log(arr.join(''))
}