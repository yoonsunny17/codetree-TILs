const initialize = (start) => {
    if (start <= n) {
        return [0, start - 1, 0];
    } else if (start <= 2 * n) {
        return [start - n - 1, n - 1, 1];
    } else if (start <= 3 * n) {
        return [n - 1, n - (start - 2 * n), 2];
    } else {
        return [n - (start - 3 * n), 0, 3];
    }
}

const inRange = (r, c) => {
    return r >= 0 && r < n && c >= 0 && c < n;
}

const move = (r, c, nextDir) => {
    return [r + dr[nextDir], c + dc[nextDir], nextDir];
}

const simulate = (r, c, dir) => {
    let moveNum = 0;
    while (inRange(r, c)) {
        if (matrix[r][c] === '/') {
            // 0 - 1 / 2 - 3 >> xor 비트 연산자 활용
            [r, c, dir] = move(r, c, dir ^ 1);
        } else {
            // 0 - 3 / 1 - 2
            [r, c, dir] = move(r, c, 3 - dir);
        }
        moveNum++;
    }

    return moveNum;
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift()); // 한 변의 길이
const startNum = Number(input.pop()); // 시작 번호

const matrix = input.map(line => line.split('')); // 이차원 행렬

// 하 좌 상 우 (레이저 방향, 바뀌는 방향 고려해서 작성)
const dr = [1, 0, -1, 0], dc = [0, -1, 0, 1];

// 시작 위치, 방향 구하기
let [r, c, dir] = initialize(startNum);


// (r, c)에서 moveDir 방향으로 레이저 쏘기 시작
const moveNum = simulate(r, c, dir);

console.log(moveNum);