const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map((v, i) => i === 0 ? v : Number(v)));

class Score {
    constructor(name, a, b, c) {
        this.name = name;
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

// 점수 총점에 대한 오름차순 정렬
const cmp = (a, b) => {
    return (a.a + a.b + a.c) - (b.a + b.b + b.c);
}

let students = [];
for (let [name, a, b, c] of infos) {
    students.push(new Score(name, a, b, c));
};

students.sort(cmp);

for (let student of students) {
    console.log(`${student.name} ${student.a} ${student.b} ${student.c}`);
};