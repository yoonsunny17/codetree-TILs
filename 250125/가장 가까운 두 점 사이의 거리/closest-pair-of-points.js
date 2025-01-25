const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

let minDist = Number.MAX_SAFE_INTEGER;
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        const [x1, y1] = infos[i];
        const [x2, y2] = infos[j];

        let dist = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

        minDist = Math.min(minDist, dist);
    }
}

console.log(minDist);