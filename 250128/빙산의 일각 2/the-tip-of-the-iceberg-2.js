const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const heights = Array.from({length: n}, (_, i) => Number(input[i+1]));

let maxCnt = 0;

// 해수면의 높이를 1부터 maxH-1 까지 설정해서 덩어리 개수 세어본다
let maxH = Math.max(...heights);
for (let i=1; i<maxH; i++) {
    let icebergs = []; // 해수면 바깥에 보이는 빙산 높이들을 담아줄 배열
    
    for (let height of heights) {
        if (height - i <= 0) {
            icebergs.push(0);
        } else {
            icebergs.push(height - i);
        }
    }

    // 빙산들에 대해서, 덩어리가 몇개인지 확인한다
    let cnt = 0; // 덩어리 개수
    let flag = false; // 지금 세고 있는 덩어리 안에 포함되어있는지 확인
    for (let j=0; j<n; j++) {
        if (icebergs[j] > 0) {
            if (!flag) {
                // 만약에 덩어리 안에 없다면
                cnt++;
                flag = true;
            }
        } else {
            // 0이 나왔다면
            flag = false;
        }
    }
    maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);