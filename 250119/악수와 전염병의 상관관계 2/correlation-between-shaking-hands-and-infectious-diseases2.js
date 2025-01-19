const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K, P, T] = input[0].split(' ').map(Number);
let arr = [];
for (let i=0; i<T; i++) {
    let [t, x, y] = input[i+1].split(' ').map(Number);
    arr.push([t, x, y]);
}

// t 오름차순으로 정렬
arr.sort((a, b) => a[0] - b[0]);

// 1번부터 N번까지 감염 여부 체크할 리스트 (idx = 0 은 무시)
// 초기 전염자는 true로 체크
let isInfected = Array(N+1).fill(false);
isInfected[P] = true;

// 각 개발자들이 몇 번 악수했는지 카운팅할 리스트
let handShakes = Array(N+1).fill(0);

// t 순서대로 악수 체크
for (let i=0; i<T; i++) {
    let x = arr[i][1], y = arr[i][2];
    if (isInfected[x] === true && isInfected[y] === true) {
        // 두 개발자 모두 전염된 상태인 경우 >> 악수횟수만 갱신
        handShakes[x]++;
        handShakes[y]++;
    } else if (isInfected[x] === false && isInfected[y] === false) {
        // 두 개발자 모두 전염되지 않은 상태인 경우 >> skip
        continue;
    } else {
        if (isInfected[x] === true) {
            // x만 전염된 경우
            if (handShakes[x] < K) {
                // 악수 횟수가 K 미만이면 감염시킬 수 있음
                isInfected[y] = true;
                handShakes[x]++;
            } else {
                // 악수 횟수가 K 이상이면, 악수 횟수만 갱신하고 감염은 안됨
                handShakes[x]++;
            }
        } else if (isInfected[y] === true) {
            // y만 전염된 경우
            if (handShakes[y] < K) {
                // 악수 횟수가 K 미만이면 감염시킬 수 있음
                isInfected[x] = true;
                handShakes[y]++;
            } else {
                // 악수 횟수가 K 이상이면, 악수 횟수만 갱신하고 감염은 안됨
                handShakes[y]++;
            }
        }
    }
}

let rlt = isInfected.map((v) => v ? 1 : 0);

console.log(rlt.slice(1).join(''));