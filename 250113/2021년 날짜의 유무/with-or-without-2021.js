const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [m, d] = input;

function solution(m, d) {
    if (m > 12) {
        return "No"
    }

    if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
        return d <= 31 ? 'Yes' : 'No'
    } else if ([4, 6, 9, 11].includes(m)) {
        return d <= 30 ? 'Yes' : 'No'
    } else if (m === 2) {
        return d <= 28 ? 'Yes' : 'No'
    }

    return "No"
}

console.log(solution(m, d))