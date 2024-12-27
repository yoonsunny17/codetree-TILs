fs = require('fs')
arr = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let [totalAge, cnt] = [0, 0]

for (let i=0; i<=arr.length-1; i++) {
    if (arr[i] >= 30) {
        break;
    }

    totalAge += arr[i]
    cnt++
}

console.log((totalAge / cnt).toFixed(2))