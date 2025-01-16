const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let point = 100000;
let tiles = Array(200000).fill('G'); // 모든 타일 G로 초기화

for (let i=0; i<n; i++) {
    let [x, command] = input[1+i].split(' ');

    if (command === 'R') {
        for (let i=point; i<point+Number(x); i++) {
            tiles[i] = 'B';
        }
        point = point + Number(x) - 1;
    } else {
        for (let i=point; i>point-Number(x); i--) {
            tiles[i] = 'W';
        }
        point = point - Number(x) + 1;
    }
}

let white = 0;
let black = 0;
for (let tile of tiles) {
    if (tile === 'W') {
        white++
    } else if (tile === 'B') {
        black++
    }
}

console.log(white, black);