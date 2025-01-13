const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [m, d] = input;

function solution(m, d) {
    if (m > 12 || d > 31) {
        return "No"
    }

    if ([1, 3, 5, 7, 10, 11].includes(m)) {
        if (1 <= d && d <= 31) {
            return "Yes"
        }
    } else if ([4, 6, 8, 9, 12].includes(m)) {
        if (1 <= d && d <= 30) {
            return "Yes"
        }
    } else if (m === 2) {
        if (1 <= d && d <= 28) {
            return "Yes"
        }
    }

    return "No"
}

console.log(solution(m, d))