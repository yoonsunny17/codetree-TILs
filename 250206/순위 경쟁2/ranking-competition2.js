class Scores {
    constructor(A, B) {
        this.A = A;
        this.B = B;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' '));

// A, B의 점수 정보를 담아준다
let scores = new Scores(0, 0);
// 둘 다 동점 우승이면 3, A 우승은 1, B 우승은 2를 저장한다
let winner = [3];

// 주어진 점수 정보들을 탐색한다
for (let info of infos) {
    let [p, s] = info;

    scores[p] += Number(s);

    if (scores['A'] === scores['B']) {
        winner.push(3);   
    } else if (scores['A'] > scores['B']) {
        winner.push(1);
    } else {
        winner.push(2);
    }
}

// 이전 우승자와 다르면 +1
let cnt = 0;
for (let i=1; i<winner.length; i++) {
    if (winner[i] !== winner[i-1]) {
        cnt++;
    }
}

console.log(cnt);