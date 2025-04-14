const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

let cost = 0; // 숫자 바꾸는데 드는 비용

while (true) {
    // 최댓값과 최솟값을 찾아준다
    let max_v = Math.max(...numbs);
    let min_v = Math.min(...numbs);

    // 종료조건: 최솟값과 최댓값의 차가 k 이하가 되는 경우 끝
    if (max_v - min_v <= k) {
        break;
    }
    
    // 최댓값 숫자의 개수와 최솟값 숫자의 개수를 세어준다
    let max_cnt = 0;
    let min_cnt = 0;
    
    max_cnt = numbs.filter((v) => v === max_v).length;
    min_cnt = numbs.filter((v) => v === min_v).length;

    // 갯수가 더 적은 값을 바꿔주고, 비용 누적 해준다
    if (max_cnt > min_cnt) {
        for (let i=0; i<n; i++) {
            if (numbs[i] === min_v) {
                numbs[i] = numbs[i] + 1;
                cost++;
            }
        }
    } else {
        for (let i=0; i<n; i++) {
            if (numbs[i] === max_v) {
                numbs[i] = numbs[i] - 1;
                cost++;
            }
        }
    }
}

console.log(cost);