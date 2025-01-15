class Info {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = [];
for (let i=0; i<5; i++) {
    let [name, height, weight] = input[i].split(' ');
    arr.push(new Info(name, height, weight))
}

// 이름순 정렬
arr.sort((a, b) => a.name.localeCompare(b.name))
console.log('name')
arr.forEach((student) => {
    console.log(`${student.name} ${student.height} ${student.weight}`)
})

// 키순 정렬
arr.sort((a, b) => b.height - a.height)
console.log('\nheight')
arr.forEach((student) => {
    console.log(`${student.name} ${student.height} ${student.weight}`)
})