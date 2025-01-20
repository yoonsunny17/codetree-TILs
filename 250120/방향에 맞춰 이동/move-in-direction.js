const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = input.map((info) => {
    const [direction, value] = info.split(' ');
    return [direction, Number(value)];
})

let dr = [0, 0, 1, -1], dc = [1, -1, 0, 0];
let r = 0, c = 0;
let nr, nc;
for (let info of infos) {
    let [d, v] = info;

    if (d === 'E') {
        nr = r + dr[0] * v, nc = c + dc[0] * v;
    } else if (d === 'W') {
        nr = r + dr[1] * v, nc = c + dc[1] * v;
    } else if (d === 'N') {
        nr = r + dr[2] * v, nc = c + dc[2] * v;
    } else {
        nr = r + dr[3] * v, nc = c + dc[3] * v;
    }

    r = nr;
    c = nc;
}

console.log(nc, nr);