const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map((v, i) => i === 0 ? v : Number(v)));

class Person {
    constructor (name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const cmp = (a, b) => {
    if (a.height !== b.height) {
        return a.height - b.height;
    } else {
        return b.weight - a.weight;
    }
}

let people = [];
for (let [name, height, weight] of infos) {
    people.push(new Person(name, height, weight));
}

people.sort(cmp);

for (let person of people) {
    console.log(`${person.name} ${person.height} ${person.weight}`);
}