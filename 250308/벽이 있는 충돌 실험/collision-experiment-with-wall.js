const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const T = Number(input[index++]);

// up / down / left / right
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
const dir = {"U": 0, "D": 1, "L": 2, "R": 3};
const dir_op = {"U": "D", "D": "U", "L": "R", "R": "L"};

// t번 반복한다
for (let t=0; t<T; t++) {
    const [n, m] = input[index++].split(' ').map(Number);
    let infos = [];

    for (let i=0; i<m; i++) {
        let [r, c, d] = input[index++].split(' ');
        r = Number(r)-1;
        c = Number(c)-1;
        infos.push([r, c, d]);
    }

    const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

    // 왕복 2n번 확인해본다 (왔다 갔다 했는데 안부딪히면 평생 안부딪힘)
    for (let k=0; k<n*2; k++) {
        let nextBeads = new Map(); // 다음 위치별로 구슬의 개수를 저장
        let nextInfos = []; // 살아남은 구슬의 정보를 저장

        for (let [r, c, d] of infos) {
            let nr = r + dr[dir[d]];
            let nc = c + dc[dir[d]];

            // 벽에 부딪히면, 위치 그대로, 방향만 바꾼다
            if (!inRange(nr, nc)) {
                d = dir_op[d];
                nr = r;
                nc = c;
            }

            // 해당 위치(key)에 구슬을 둔다
            let key =`${nr},${nc}`;
            nextBeads.set(key, (nextBeads.get(key) || 0) + 1);
            nextInfos.push([nr, nc, d]);
        }

        // 충돌한 구슬의 정보를 제거한다 (해당 자리에 하나만 있는 경우만 살려둔다)
        infos = nextInfos.filter(([r, c, _]) => nextBeads.get(`${r},${c}`) === 1);

        // 구슬 모두 사라졌다면 끝낸다
        if (infos.length === 1) break;
        if (infos.length === 0) break;
    }

    console.log(infos.length);
}