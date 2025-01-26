const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let rlt = 0;

let idx = 0;
while (idx < n) {
    let flag = false; // 겹쳐지는지 확인

    // 기준이 되는 선을 선택한다
    let baseX1 = 0, baseX2 = 0;
    for (let i=0; i<n; i++) {
        if (i === idx) {
            baseX1 = infos[i][0];
            baseX2 = infos[i][1];
        }
    }
    
    // 해당 선에 대해서, 다른 선분들의 범위가 어떻게 되는지 확인한다
    for (let j=0; j<n; j++) {
        if (j !== idx) {
            let [x1, x2] = infos[j];
            
            // 기준 선분보다 좁게 들어오는 경우거나, 넓게 들어오는 경우 겹쳐진다
            if (baseX1 < x1 && baseX2 > x2) {
                flag = true;
            } else if (baseX1 > x1 && baseX2 < x2) {
                flag = true;
            }
        }
    }

    // 다른 선분과 겹쳐지는 경우가 존재하지 않으면 세어준다
    if (flag) rlt++;
    idx++;
}

console.log(rlt);