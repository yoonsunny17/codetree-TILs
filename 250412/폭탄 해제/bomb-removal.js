const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ');

class Bomb {
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }
}

let bomb = new Bomb(a, b, c);

console.log(`code : ${bomb.code}`);
console.log(`color : ${bomb.color}`);
console.log(`second : ${bomb.second}`);