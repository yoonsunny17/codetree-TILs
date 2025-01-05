fs = require('fs')
input = fs.readFileSync(0).toString().trim().split('\n')


let arr = Array(4).fill(0)
for (let i=0; i<3; i++) {
    let [check, temp] = input[i].split(' ')

    if (check === 'Y' && Number(temp) >= 37) {
        arr[0]++
    } else if (check === 'N' && Number(temp) >= 37) {
        arr[1]++
    } else if (check === 'Y' && Number(temp) < 37) {
        arr[2]++
    } else arr[3]++
}

console.log(arr.join(' '), arr[0] >= 2 ? 'E' : '')
