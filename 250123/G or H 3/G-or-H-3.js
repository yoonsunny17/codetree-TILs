const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' '));

let arr = Array(10001).fill('');
for (let info of infos) {
    let [numb, photo] = [Number(info[0]), info[1]];

    arr[numb] = photo;
}

let maxScore = 0;
// K구간만큼씩 검사해본다
for (let i=1; i<arr.length-k+1; i++) {
    let score = 0;
    for (let j=i; j<i+k+1; j++) {
        if (arr[j] === 'G') {
            score += 1;
        } else if (arr[j] === 'H') {
            score += 2;
        }
    }
    maxScore = Math.max(maxScore, score);
}

console.log(maxScore);