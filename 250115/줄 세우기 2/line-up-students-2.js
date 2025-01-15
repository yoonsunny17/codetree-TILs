class Info {
    constructor(h, w, n) {
        this.h = h;
        this.w = w;
        this.n = n;
    }
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = []

const n = Number(input[0])
for (let i=0; i<n; i++) {
    let [h, w] = input[1+i].split(' ').map(Number)
    arr.push(new Info(h, w, i+1))
}

arr.sort((a, b) => {
    if (a.h !== b.h) return a.h - b.h
    if (a.w !== b.w) return b.w - a.w
})

arr.forEach((student) => {
    console.log(`${student.h} ${student.w} ${student.n}`)
})