const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const str = input[1];

let ans = 0;

for (let i=1; i<n; i++) {
    let duplicate = [];
    let flag = true;

    for (let j=0; j<n-i+1; j++) {
        // 길이 i인 문자열 추출한다
        let k = str.slice(j, j+i)

        // 그 문자열의 중복 문자열이 이미 들어있으면 더 확인할 필요가 없다
        if (duplicate.includes(k)) {
            flag = false;
            break;
        }

        // 중복문자열이 안들어가있으면 넣어주기
        duplicate.push(k);
    }

    // 중복문자열이 없었다면 i 길이를 ans로 갱신한다
    if (flag) {
        ans = i;
        break;
    }
}

console.log(ans);