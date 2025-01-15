class Info {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    };
};

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let arr = Array(n).fill(new Info());
for (let i=0; i<n; i++) {
    let [name, height, weight] = input[i+1].split(' ');
    arr[i] = new Info(name, height, weight);
};

arr.sort((prev, curr) => prev.height - curr.height);

for (let i=0; i<n; i++) {
    console.log(`${arr[i].name} ${arr[i].height} ${arr[i].weight}`);
}