function solution(n, m) {
    for (let i=0; i<n; i++) {
        let str = ''

        for (let j=0; j<m; j++) {
            str += '1'
        }
        console.log(str)
    }
}

const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let [n, m] = input.map(Number)


solution(n, m)