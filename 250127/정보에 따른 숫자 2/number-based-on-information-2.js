const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [t, a, b] = input[0].split(' ').map(Number);
const infos = Array.from({length: t}, (_, i) => input[i+1].split(' '));

let rlt = 0;

// a이상 b이하 숫자 하나씩 판단해본다
for (let numb=a; numb<=b; numb++) {
    let distS = Number.MAX_SAFE_INTEGER;
    let distN = Number.MAX_SAFE_INTEGER;

    // 받은 데이터들을 하나씩 확인해본다
    infos.forEach(([c, x]) => {
        if (c === 'N') {
            distN = Math.min(distN, Math.abs(x-numb));
        } else {
            distS = Math.min(distS, Math.abs(x-numb));
        }
    })

    if (distS <= distN) {
        rlt++;
    }
}

console.log(rlt);