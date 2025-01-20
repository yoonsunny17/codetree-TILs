const fs = require('fs');
const infos = fs.readFileSync(0).toString().trim().split('');

// 상 우 하 좌
const dr = [-1, 0, 1, 0], dc = [0, 1, 0, -1];
let r = 0, c = 0, dir = 0; // 초기위치 (0, 0), 북쪽 방향 바라보고 있음

let time = 0; // 몇초 걸리는지 체크할 변수
for (let info of infos) {
    if (info === 'R') {
        // 시계 방향으로 회전
        dir = (dir + 1) % 4;
    } else if (info === 'L') {
        // 반시계 방향으로 회전
        dir = (dir + 3) % 4;
    } else {
        // 한칸 이동
        r += dr[dir], c += dc[dir];
    }

    // 회전 또는 이동할 때마다 1초씩 계산
    time++;

    // 이동한 결과가 초기 위치라면, 결과 출력하고 끝
    if (r === 0 && c === 0) {
        console.log(time);
        return;
    }
}

// 초기 위치에 도달할 수 없다면 -1 출력
console.log(-1);