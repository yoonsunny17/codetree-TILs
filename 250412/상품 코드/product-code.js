const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const [a, b] = input;

class Item {
    constructor (name = 'codetree', code = 50) {
        this.name = name;
        this.code = code;
    }
}

let item1 = new Item();
console.log(`product ${item1.code} is ${item1.name}`);

let item2 = new Item(a, Number(b));
console.log(`product ${item2.code} is ${item2.name}`);