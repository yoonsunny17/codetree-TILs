fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const [n, q] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

for (let i=2; i<2+q; i++) {
    const question = input[i].split(' ').map(Number)

    if (question[0] === 1) {
        console.log(arr[question[1]-1])
    } else if (question[0] === 2) {
        let idx = -1;
        for (let a=0; a<n; a++) {
            if (arr[a] === question[1]) {
                idx = a
                break;
            }
        }
        console.log(idx+1)
    } else {
        console.log(arr.slice(question[1]-1,question[2]).join(' '))
    }
}