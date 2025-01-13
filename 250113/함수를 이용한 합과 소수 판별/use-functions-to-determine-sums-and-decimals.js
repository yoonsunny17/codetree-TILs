function isPrime(numb) {
    for (let i=2; i<numb; i++) {
        if (numb % i === 0) {
            return false
        }
    }

    return true
}

function isSum(numb) {
    let total = 0;

    while (numb > 0) {
        total += numb % 10
        numb = parseInt(numb / 10)
    }

    if (total % 2 === 0) {
        return true
    }

    return false
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = input

let cnt = 0;
for (let i=a; i<=b; i++) {
    if (isPrime(i) && isSum(i)) {
        cnt++;
    }
}

console.log(cnt)