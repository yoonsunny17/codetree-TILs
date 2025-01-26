const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input.shift().split(' ').map(Number);
const infos = Array.from({length: k}, (_, i) => input[i].split(' ').map(Number));

let rlt = 0;
// 비교할 두 번호를 고른다
for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
        if (i === j) {
            continue;
        }

        // 순위가 바뀌는지 체크해본다
        let flag = true;
        for (let info of infos) {
            if (info.indexOf(i) < info.indexOf(j)) {
                flag = false;
                break;
            }
        }
        
        if (flag) rlt++;
    }
}

console.log(rlt);