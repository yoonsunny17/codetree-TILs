const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map((v, i) => i !== 0 ? Number(v) : v));

class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const cmp = (a, b) => {
    if (a.kor !== b.kor) {
        return b.kor - a.kor; // 국어 내림차순
    } else if (a.eng !== b.eng) {
        return b.eng - a.eng; // 영어 내림차순
    } else {
        return b.math - a.math; // 수학 내림차순
    }
};

let students = [];
for (let [name, kor, eng, math] of infos) {
    students.push(new Student(name, kor, eng, math));
}

students.sort(cmp);

for (let student of students) {
    console.log(`${student.name} ${student.kor} ${student.eng} ${student.math}`);
};
