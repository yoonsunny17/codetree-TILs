const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const a = input[1];

function calcDays(m, d) {
    const daysOfMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    // 1월부터 m-1월까지
    for (let i=0; i<m; i++) {
        totalDays += daysOfMonth[i];
    }

    // m월
    totalDays += d;

    return totalDays;
}

// 두 날짜 간격
let dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const diff = calcDays(m2, d2) - calcDays(m1, d1)
const idx = dayOfWeek.indexOf(a)

console.log(diff % 7 >= idx ? parseInt(diff / 7) + 1 : parseInt(diff / 7))
