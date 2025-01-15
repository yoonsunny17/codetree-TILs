const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [m1, d1, m2, d2] = input;

function calcDays(m, d) {
    const daysOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    // 1월부터 m-1월까지
    for (let i=0; i<m; i++) {
        totalDays += daysOfMonth[i];
    };

    // m월
    totalDays += d;

    return totalDays;
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let diff = calcDays(m1, d1) - calcDays(m2, d2);

if (diff > 0) {
    let calc = 8 - diff % 7
    console.log(days[calc === 7 ? 0 : calc])
} else {
    let calc = (1 + Math.abs(diff)) % 7
    console.log(days[(1 + Math.abs(diff)) % 7])
}
