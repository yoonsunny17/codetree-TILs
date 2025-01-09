let arr = Array(5).fill(0).map(() => Array(5).fill(0))

for (let i=0; i<5; i++) {
    arr[i][0] = 1
    arr[0][i] = 1
}

for (let i=1; i<5; i++) {
    for (let j=1; j<5; j++) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1]
    }
}

for (let row of arr) {
    let str = ''
    for (let elem of row) {
        str += `${elem} `
    }
    console.log(str)
}