// 첫 설치는 m에 한다 (그러면 idx=0인 부분부터, 2m 위치까지 커버 가능)
// 그 다음 설치는 현재 와이파이 설치된 곳으로부터 2m + 1 인 곳에 한다
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const infos = input[1].split(' ').map(Number);

idx = m;
cnt = 1;
while (true) {
    idx += 2 * m + 1;

    if (idx >= n) {
        break;
    }
    cnt++;
}

console.log(cnt)