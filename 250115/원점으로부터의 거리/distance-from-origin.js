class Info {
    constructor(x, y, numb) {
        this.x = x;
        this.y = y;
        this.numb = numb;
    }
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])

let arr = []
for (let i=0; i<n; i++) {
    let [x, y] = input[i+1].split(' ').map(Number)
    arr.push(new Info(x, y, i+1))
}

arr.sort((a, b) => {
    const distA = Math.abs(a.x) + Math.abs(a.y)
    const distB = Math.abs(b.x) + Math.abs(b.y)

    if (distA !== distB) return distA - distB // 거리 가까운순
    return a.number - b.number // 번호 작은 순
})

arr.forEach((i) => console.log(i.numb))
