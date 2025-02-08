const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let rlt = [];
let checkLines = Array(1001).fill(0); // 선분 체크할 리스트

let maxCnt = 0;
function solution(currNum) {
    // 종료 조건: n개 모두 확인한 경우
    if (currNum === n) {
        maxCnt = Math.max(maxCnt, rlt.length);
        return;
    }

    // 재귀: 겹치지 않는 선분들을 모두 찾아낸다
    for (let info of infos) {
        let [r, l] = info;

        // r부터 l 구간에 1이 하나라도 있으면 겹치는걸로 간주한다
        let check = checkLines.slice(r, l+1).every((v) => v === 0);

        if (check) {
            checkLines = checkLines.map((v, i) => (i >= r && i <= l ? 1 : v))
            rlt.push(info);
            solution(currNum+1);
        } else {
            solution(currNum+1);
        }
    }
}

solution(0);

console.log(maxCnt);