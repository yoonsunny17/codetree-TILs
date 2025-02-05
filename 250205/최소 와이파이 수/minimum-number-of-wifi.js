const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const infos = input[1].split(' ').map(Number);

// 사람이 사는 위치라면, 그 위치로부터 m만큼 오른쪽 떨어진 곳에 설치한다
// 설치한 곳에서 2m 떨어진 곳에서 다시 탐색한다

let cnt = 0, idx = 0;
while (idx < n) {
    if (infos[idx] === 1) {
        cnt++;
        idx += 2 * m + idx;
    } else {
        idx++;
    }
}

console.log(cnt);