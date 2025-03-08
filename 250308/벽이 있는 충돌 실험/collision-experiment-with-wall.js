const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const T = Number(input[index++]);

const MAX_N = 50;
let [n, m] = [-1, -1];
let beads = [];
let beadsCnt = Array.from(Array(MAX_N+1), () => Array(MAX_N).fill(0))

const dirs = {"U": 0, "L": 1, "R": 2, "D": 3};

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

// 해당 구슬의 1초 후 위치와 방향을 구한다
const move = (bead) => {
    // up / left / right / down
    const dr = [-1, 0, 0, 1];
    const dc = [0, -1, 1, 0];

    let [r, c, dir] = bead;

    const nr = r + dr[dir];
    const nc = c + dc[dir];

    // 이동한 위치가 범위 내라면, 그 위치와 원래 방향을 리턴한다
    // 벽을 만났다면, 원래 위치와 반대 방향으로 갱신한다
    if (inRange(nr, nc)) {
        return [nr, nc, dir];
    } else {
        return [r, c, 3-dir];
    }
}

// 구슬 하나씩 움직여본다
const moveBeads = () => {
    beads = beads.map(bead => move(bead));
}

// 해당 자리에 두 개 이상의 구슬이 있는 경우 true 리턴한다
const isDuplicated = (idx) => {
    const [tr, tc] = beads[idx];
    return beadsCnt[tr][tc] >= 2;
}

// 한 위치에 여러 구슬이 있는 경우, 구슬들을 제거한다
const removeBeads = () => {
    // 구슬의 위치를 표시한다
    beads.forEach(([r, c, _]) => beadsCnt[r][c]++);

    // 충돌이 일어나지 않은 구슬만 기록한다
    const safeBeads = beads.filter((_, i) => !isDuplicated(i));

    // 나중을 위해 beadsCnt를 초기화한다
    beads.forEach(([r, c]) => beadsCnt[r][c]--);

    // 구슬의 정보를 업데이트 해준다
    beads = safeBeads;
}

const simulate = () => {
    // 1. 구슬을 모두 움직여본다
    moveBeads();

    // 2. 같은 위치에 있는 구슬들을 제거한다
    removeBeads();
}

// t번 반복한다
for (let t=0; t<T; t++) {
    // 새로운 케이스마다 기존의 값을 초기화한다
    [n, m] = input[index++].split(' ').map(Number);
    beads = [];
    for (let i=0; i<m; i++) {
        let [r, c, d] = input[index++].split(' ');
        r = Number(r) - 1;
        c = Number(c) - 1;
        beads.push([r, c, dirs[d]]); 
    }

    // 왕복 2n번의 시뮬레이션을 진행해본다
    for (let i=0; i<2*n; i++) {
        simulate();
    }

    console.log(beads.length);
}