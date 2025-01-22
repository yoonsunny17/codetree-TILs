const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const numbs = Array.from({length: n}, (_, i) => Number(input[i]));
 
// console.log(numbs)

let rlt = 0; // 최댓값 출력할 변수

const carry = (a, b, c) => {
    let len = Math.max(String(a).length, String(b).length, String(c).length); // 가장 길이가 긴 숫자만큼 확인해본다

    let flag = true; // 캐리 발생 여부 체크할 플래그
    let cnt = [];
    for (let i=0; i<len; i++) {
        if (a % 10 + b % 10 + c % 10 >= 10) {
            flag = false;
        } else {
            cnt.push(a % 10 + b % 10 + c % 10);
            a = parseInt(a/10), b = parseInt(b/10), c = parseInt(c/10);
        }
    }
    
    // 1의자리부터 확인했으므로 출력 시 reverse
    return flag ? cnt.reverse().join('') : false
}

for (let i=0; i<n-2; i++) {
    for (let j=i+1; j<n-1; j++) {
        for (let k=j+1; k<n; k++) {
            // 세개의 숫자를 선택
            let [n1, n2, n3] = [numbs[i], numbs[j], numbs[k]];
            // 캐리 발생 여부 확인 (캐리 발생했으면 false, 발생하지 않았으면 숫자의 합 리턴)
            if (carry(n1, n2, n3)) {
                rlt = Math.max(rlt, carry(n1, n2, n3));
            }
        }
    }
}

console.log(rlt > 0 ? rlt : -1);