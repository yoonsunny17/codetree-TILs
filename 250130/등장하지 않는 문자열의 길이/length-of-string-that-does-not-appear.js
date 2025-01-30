const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const str = input[1];

let cnt = 0; // 문자열 길이 갱신해줄 변수

for (let i=0; i<n; i++) {
    for (let j=i; j<n; j++) {
        let checkStr = str.slice(i, j+1);
        
        let k = str.slice(j+1); // 나머지 문자열

        // 나머지 문자열에 포함되어 있으면 지나가기
        if (k.includes(checkStr)) {
            continue;
        } else {
            cnt = Math.max(checkStr.length, cnt);
            break;
        }
    }
}

console.log(cnt);