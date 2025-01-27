const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

const checkTemp = (a, b, temp) => {
    if (temp < a) {
        return c;
    } else if (a <= temp && temp <= b) {
        return g;
    } else if (temp > b) {
        return h;
    }
}

let maxVal = 0;
// 온도를 0도부터 1000도까지 맞춰본다
for (let i=0; i<=1000; i++) {

    let score = 0;
    for (let info of infos) {
        let [a, b] = info;
        score += checkTemp(a, b, i);
    }

    maxVal = Math.max(maxVal, score);
}

console.log(maxVal);
