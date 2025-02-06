class Scores {
    constructor (A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' '));

let scores = new Scores(0, 0, 0);
let winner = [7]
for (let info of infos) {
    let [c, s] = info;

    scores[c] += Number(s);

    if (scores['A'] > scores['B'] && scores['A'] > scores['C']) {
        winner.push(1);
    } else if (scores['B'] > scores['A'] && scores['B'] > scores['C']) {
        winner.push(2);
    } else if (scores['C'] > scores['A'] && scores['C'] > scores['B']) {
        winner.push(3);
    } else if (scores['A'] === scores['B'] && scores['B'] > scores['C']) {
        winner.push(4);
    } else if (scores['A'] === scores['C'] && scores['C'] > scores['B']) {
        winner.push(5);
    } else if (scores['B'] === scores['C'] && scores['C'] > scores['A']) {
        winner.push(6);
    } else if (scores['A'] === scores['B'] && scores['A'] === scores['C']) {
        winner.push(7);
    }
}

let cnt = 0;
for (let i=1; i<winner.length; i++) {
    if (winner[i] !== winner[i-1]) {
        cnt++;
    }
}

console.log(cnt);