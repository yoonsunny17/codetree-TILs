const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

// 초기 설정
let matrix = Array(n).fill(0).map(() => Array(n).fill(0));
let [r, c] = [Math.floor(n/2), Math.floor(n/2)];
let numb = 1; // 채워야 할 숫자

// 우 상 좌 하
const dr = [0, -1, 0, 1], dc = [1, 0, -1, 0];
let dir = 0;

// 이동 변수
let stepSize = 1; // 해당 방향으로 이동해야 할 칸 수
let steps = 0; // 현재 이동한 칸 수
let turns = 0; // 방향 전환 횟수

while (numb <= n**2) {
    matrix[r][c] = numb; // 숫자를 채워준다
    numb++; // 숫자 1 키워준다

    // 다음 위치 이동, 이동한 칸 수 세어주기
    r += dr[dir], c += dc[dir];
    steps++;

    // 이동해야 할 칸 수 도달하면 방향 틀기
    if (steps === stepSize) {
        dir = (dir + 1) % 4;
        steps = 0; // 방향 틀때마다 0으로 초기화
        turns++;

        // 방향 전환 두번마다 이동해야 할 칸수 하나씩 증가
        if (turns % 2 === 0) {
            stepSize++;
        }
    }
}

for (let row of matrix) {
    console.log(row.join(' '));
}
