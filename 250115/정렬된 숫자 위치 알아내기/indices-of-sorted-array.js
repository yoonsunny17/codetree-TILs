class Info {
    constructor(numb, idx) {
        this.numb = numb;
        this.idx = idx;
    } 
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
let numbs = input[1].split(' ').map(Number)

let arr = []
for (let i=0; i<n; i++) {
    arr.push(new Info(numbs[i], i))
}

arr.sort((a, b) => {
    if (a.numb !== b.numb) return a.numb - b.numb
    return a.idx - b.idx
})

let rlt = new Array()
for (let i=0; i<n; i++) {
    rlt[arr[i].idx] = i+1
}

console.log(rlt.join(' '))