fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

let [n1, n2] = input[0].split(' ').map(Number)
let arr1 = input[1].split(' ').map(Number)
let arr2 = input[2].split(' ').map(Number)

let check = 0;

for (let i=0; i<=n1-n2; i++) {
    let isMatch = true;

    for (let j=0; j<n2; j++) {
        if (arr1[i+j] !== arr2[j]) {
            isMatch = false
            break;
        }
    }

    if (isMatch) check++
}

console.log(check > 0 ? 'Yes' : 'No')
