function compare(a, b) {
    if (a.height > b.height) {
        return b.height - a.height;
    } else if (a.height === b.height) {
        return b.weight - a.weight;
    } else if (a.weight === b.weight) {
        return a.number - b.number
    }
}

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

arr.sort(compare)

for (let i=0; i<n; i++) {
    console.log(`${arr[i].height} ${arr[i].weight} ${arr[i].number}`)
}