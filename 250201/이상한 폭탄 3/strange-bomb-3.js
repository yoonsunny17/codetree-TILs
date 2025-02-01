const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const bombs = Array.from({length: n}, (_, i) => Number(input[i+1]));

// 확인할 폭탄의 번호를 가져온다
const checkNumb = new Set(bombs);

let maxCnt = 0;
let maxBomb = -1;
for (let check of checkNumb) {
    let sameBomb = [];
    for (let i=0; i<n; i++) {
        if (bombs[i] === check) {
            sameBomb.push(i);
        }
    }

    // 적어도 하나는 있으므로(자기자신) 1로 초기화한다
    let cnt = 1;
    
    if (sameBomb.length === 1) {
        cnt = 1;
    } else {
        for (let j=0; j<sameBomb.length-1; j++) {
            if (sameBomb[j+1] - sameBomb[j] <= k) {
                cnt++;
            }
        }
    }
    
    // 더 많이 터진 폭탄이 있다면, 최대 폭발 개수 갱신해준다
    // 그리고 폭탄 번호 갱신해준다
    if (maxCnt < cnt) {
        maxCnt = cnt;
        maxBomb = check;
    }
}

console.log(maxCnt === 1 ? 0 : maxBomb);