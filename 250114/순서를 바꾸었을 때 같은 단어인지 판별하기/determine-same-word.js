const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let word1 = input[0].split('')
let word2 = input[1].split('')

// 문자열 정렬
word1.sort()
word2.sort()

function solution() {
    // 길이가 다르면 안됨
    if (word1.length !== word2.length) {
        return false;
    }

    for (let i=0; i<word1.length; i++) {
        if (word1[i] !== word2[i]) {
            return false;
        }
    }

    return true;
}

console.log(solution() ? 'Yes' : 'No')
