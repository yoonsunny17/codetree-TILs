const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

const MAX_RANGE = 40000;

let min_area = Number.MAX_SAFE_INTEGER; // 최소 영역 출력할 변수

let idx = 0;
while (idx !== n) {
    let max_x = Number.MIN_SAFE_INTEGER, max_y = Number.MIN_SAFE_INTEGER;
    let min_x = Number.MAX_SAFE_INTEGER, min_y = Number.MAX_SAFE_INTEGER;

    for (let i=0; i<n; i++) {
        if (i === idx) {
            continue;
        }

        const [x, y] = infos[i];
        max_x = Math.max(max_x, x), max_y = Math.max(max_y, y);
        min_x = Math.min(min_x, x), min_y = Math.min(min_y, y);
    }

    min_area = Math.min(min_area, (max_x - min_x) * (max_y - min_y))
    idx++;
}

console.log(min_area);