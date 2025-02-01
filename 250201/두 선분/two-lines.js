const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const check = (input) => {
    const [x1, x2, x3, x4] = input;
    
    if (x2 < x3 || x1 > x4) {
        return "nonintersecting"
    } else {
        return "intersecting"
    }
}

console.log(check(input));