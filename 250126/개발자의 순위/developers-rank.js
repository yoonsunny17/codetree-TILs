const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input.shift().split(' ').map(Number);
const infos = Array.from({length: k}, (_, i) => input[i].split(' ').map(Number));

let rlt = 0;
// 비교할 두 번호를 고른다
for (let i=1; i<=n; i++) {
    for (let j=i+1; j<=n; j++) {
        let one = infos[0].indexOf(i), two = infos[0].indexOf(j);
        let cnt = 0;

        // 두 개발자의 순위가 지속되는지 확인한다
        for (let info of infos) {
            if (info.indexOf(one) > info.indexOf(two)) cnt++;
            else cnt--;
        }
        
        if (Math.abs(cnt) === k) rlt++;
    }
}

console.log(rlt);