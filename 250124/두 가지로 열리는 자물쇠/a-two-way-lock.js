const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a1, b1, c1] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

if (n < 5) {
    console.log(n ** 3);
    return;
}

let totalCase = []; // 가능한 모든 경우의 수 넣기

const checkRange = (numb) => {
    let arr = [];
    for (let i=-2; i<=2; i++) {
        if ((numb + i) < 1) {
            arr.push(n + (numb + i));
        } else if ((numb + i) > n) {
            arr.push((numb + i) % n);
        } else {
            arr.push(numb + i);
        }
    }

    return arr;
}

// 첫번째 조함 확인
let a1_arr = checkRange(a1);
let b1_arr = checkRange(b1);
let c1_arr = checkRange(c1);

for (let i of a1_arr) {
    for (let j of b1_arr) {
        for (let k of c1_arr) {
            totalCase.push([i, j, k]);
        }
    }
}

// 두번째 조합 확인 
let a2_arr = checkRange(a2);
let b2_arr = checkRange(b2);
let c2_arr = checkRange(c2);

for (let i of a2_arr) {
    for (let j of b2_arr) {
        for (let k of c2_arr) {
            // 첫번째 조합에서 나온 경우와 중복되는 것은 제외하고 넣어준다
            if (!totalCase.some(arr => arr.every((v, idx) => v === [i, j, k][idx]))) {
                totalCase.push([i, j, k]);
            }
        }
    }
}

console.log(totalCase.length);
