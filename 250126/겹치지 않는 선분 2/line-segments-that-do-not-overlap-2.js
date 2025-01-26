const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let rlt = 0;

// 하나의 선을 기준으로 삼아서, 겹치는지 확인해본다
for (let i=0; i<n; i++) {
    let flag = false;

    for (let j=0; j<n; j++) {
        // 기준선인 경우 제외한다
        if (j === i) {
            continue;
        }

        // 기준선보다 더 넓게 들어오는경우 또는 더 좁게 들어오는 경우 겹친다
        if ((infos[i][0] <= infos[j][0] && infos[i][1] >= infos[j][1]) || (infos[i][0] >= infos[j][0] && infos[i][1] <= infos[j][1])) {
            flag = true;
            break;
        }
    }

    if (!flag) rlt++;
}

console.log(rlt);