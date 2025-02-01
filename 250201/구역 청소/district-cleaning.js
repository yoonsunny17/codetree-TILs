const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

if (b < c || d < a) {
    // 안겹치는 경우 >> b-a + d-c
    console.log(b - a + d - c);
} else {
    // 겹치는 경우 >> max-min
    const maxV = Math.max(a, b, c, d);
    const minV = Math.min(a, b, c, d);
    console.log(maxV - minV);
}