const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, t] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map((v, i) => {
    return i === 2 ? v : Number(v) - 1;
})

// 우 하 상 좌
let dr = [0, 1, -1, 0], dc = [1, 0, 0, -1];

// 방향 딕셔너리
let dict = {
    'R': 0,
    'D': 1,
    'U': 2,
    'L': 3
};

// 초기 방향 지정
let dir = dict[d];

// 범위 내에 존재하는지 (존재하지 않으면 반대 방향으로 꺾기)
const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < n;
}

while (t > 0) {
    let nr = r + dr[dir], nc = c + dc[dir];
    // 벽에 부딪힌 경우 >> 반대 방향으로 이동
    if (!inRange(nr, nc)) {
        dir = 3 - dir;
    } else {
        r = nr, c = nc;
    }

    t--;
}

console.log(r+1, c+1);