const fs = require('fs');
const n = Number(fs.readFileSync(0).toString())

// n자리 숫자를 만들어본다
let rlt = [];
let beautyNumber = 0; // 아름다운 수 출력할 변수

function isBeautiful(arr) {
    let cnts = [];
    let prev = arr[0]; // 이전 수와 동일한지 비교해야됨
    let cnt = 1;

    for (let i=1; i<arr.length; i++) {
        if (arr[i] === prev) {
            // 이전 숫자와 동일하다면 개수 세기
            cnt++;
        } else {
            // 동일하지 않으면, 지금까지 세어준거 저장해줘
            // 비교군 갱신해주고
            // cnt = 1 로 초기화해줘
            cnts.push([prev, cnt]);
            prev = arr[i];
            cnt = 1;
        }
    }
    cnts.push([prev, cnt]); // 마지막 그룹 추가

    // 숫자와 연속된 개수 비교
    for (let [num, cnt] of cnts) {
        if (cnt % num !== 0) {
            return false;
        }
    }

    return true;
}

function makeNumber (curr) {
    // 종료 조건: n자리 숫자 만들었을 때
    if (curr === n + 1) {
        // 해당 숫자가 아름다운 수인지 확인한다
        if (isBeautiful(rlt)) {
            beautyNumber++;
        }
        return;
    }

    // 재귀 조건: 아직 n자리 숫자 만드는중
    for (let i=1; i<=4; i++) {
        rlt.push(i);
        makeNumber(curr+1);
        rlt.pop();
    }
}

makeNumber(1);
console.log(beautyNumber);