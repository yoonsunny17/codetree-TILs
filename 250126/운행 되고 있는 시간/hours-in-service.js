const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

let maxVal = 0;

// 한명씩 제외시키면서, 운행 되고 있는 시간 확인
let idx = 0; // 제외될 사람
while (idx < n) {
    let workTimes = Array(1001).fill(0); // 일하는 시간 체크할 리스트
    let cnt = 0; // 한 경우마다, 운행 되고 있는 시간 체크할 변수

    for (let i=0; i<n; i++) {
        if (i === idx) {
            continue;
        }

        let [a, b] = infos[i];
        for (let k=a; k<b; k++) {
            workTimes[k]++;
        }
    }

    // 운행 되고 있는 시간 체크 후, 최대값 갱신
    for (let time of workTimes) {
        if (time > 0) {
            cnt++;
        }
    }

    maxVal = Math.max(maxVal, cnt);

    // 다음 직원으로 넘어가기
    idx++;
}

console.log(maxVal);