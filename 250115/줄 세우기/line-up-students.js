class Info {
    constructor(height, weight, number) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])

let arr = [];
for (let i=0; i<n; i++) {
    let [height, weight] = input[i+1].split(' ').map(Number)
    arr.push(new Info(height, weight, i+1))
}

arr.sort((a, b) => {
    if (a.height !== b.height) return b.height - a.height // 키 내림차순
    if (a.weight !== b.weight) return b.weight - a.weight // 몸무게 내림차순
    return a.number - b.number // 번호 오름차순
})

arr.forEach(student => {
    console.log(`${student.height} ${student.weight} ${student.number}`)
})