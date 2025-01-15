const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let [id, level] = input;

class Info {
    constructor(id="codetree", level="10") {
        this.id = id;
        this.level = level;
    }
}

let info = new Info();

console.log(`user ${info.id} lv ${info.level}`);

info.id = id;
info.level = level;
console.log(`user ${info.id} lv ${info.level}`);