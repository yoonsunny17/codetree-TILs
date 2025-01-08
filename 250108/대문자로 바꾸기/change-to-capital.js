fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let [r, c] = [5, 3]
for (let i=0; i<r; i++) {
    let arr = input[i].split(' ')
    for (let j=0; j<c; j++) {
        // console.log(arr[j])
        arr[j] = arr[j].toUpperCase()
    }

    console.log(arr.join(' '))
}
