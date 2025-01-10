fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')

const [str1, str2] = [input[0], input[1]]

let cnt = 0
for (let i=0; i<2; i++) {
    if (str1[i] == str2[i]) {
        cnt++
    }
}

console.log(cnt === 2 ? true: false)