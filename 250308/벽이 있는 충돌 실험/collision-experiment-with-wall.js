// const fs = require('fs');
// const input = fs.readFileSync(0).toString().trim().split('\n');

// let index = 0;
// const T = Number(input[index++]);

// // U / D / L / R
// const dr = [-1, 1, 0, 0];
// const dc = [0, 0, -1, 1];
// const dir = {"U": 0, "D": 1, "L": 2, "R": 3};
// const dir_op = {"U": "D", "D": "U", "L": "R", "R": "L"};

// for (let t=0; t<T; t++) {
//     const [n, m] = input[index++].split(' ').map(Number);

//     const infos = [];
//     for (let i=0; i<m; i++) {
//         let [r, c, d] = input[index++].split(' ');
//         r = Number(r)-1;
//         c = Number(c)-1;
//         infos.push([r, c, d]);
//     }

//     // 이동할 수 있는 구슬이 남아있을 때까지 진행한다
//     const beads = Array.from({length: n}, () => Array(n).fill(0)); // 현재 구슬의 위치
//     const nextBeads = Array.from({length: n}, () => Array(n).fill(0)); // 구슬의 다음 위치
//     let cnt = 0;
//     while (infos.length) {
//         if (cnt > 4) break;
//         for (let info of infos) {
//             let [r, c, _] = info;
//             beads[r][c] = 1;
//         }

//         let [r, c, d] = infos.shift();

//         let nr = r + dr[dir[d]];
//         let nc = c + dc[dir[d]];

//         // 다음 구슬의 위치가 범위 내에 존재한다면, 그 자리에 위치 표시를 해준다
//         // 범위 내에 존재하지 않는다면, 현재 위치에 표시하고, 방향을 바꿔준다
//         if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
//             nextBeads[nr][nc]++;
//         } else {
//             nextBeads[r][c]++;
//             d = dir_op[d];
//         }

//         // 같은 자리에 두 개 이상의 구슬이 있다면 폭파시킨다.
//         for (let i=0; i<n; i++) {
//             for (let j=0; j<n; j++) {
//                 if (nextBeads[i][j] >= 2) {
//                     beads[i][j] = 0;
//                 } else {
//                     beads[i][j] = nextBeads[i][j];
//                     infos.push([r, c, d]);
//                 }
//             }
//         }

//         cnt++;
//     }

//     console.log(beads);
// }



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
        if (infos.length === 0) break;
    }

    console.log(infos.length);
}