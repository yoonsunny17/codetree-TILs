class User {
    constructor(codename, score) {
        this.codename = codename;
        this.score = score;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let users = [];
for (let i=0; i<5; i++) {
    let [codename, score] = input[i].split(' ')
    users.push(new User(codename, Number(score)))
}

let minIdx = 0;
for (let i=0; i<5; i++) {
    if (users[minIdx].score > users[i].score) {
        minIdx = i;
    }
}

console.log(users[minIdx].codename, users[minIdx].score)
