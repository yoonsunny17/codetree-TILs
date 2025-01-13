const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [y, m, d] = input;

// 윤년인지 확인
function isYoonYear(year) {
    let flag = true;

    if (year % 4 === 0) {
        flag = true;
    } else if (y % 100) {
        flag = false;
    } else if (y % 400) {
        flag = true;
    } else {
        flag = false;
    }

    return flag
}

// 존재하는 월, 일인지 체크
function checkDayandMonth(y, m, d) {
    if (isYoonYear(y) && m === 2) {
        return d <= 29 ? true : false;
    } else if (!isYoonYear(y) && m === 2) {
        return d <= 28 ? true : false;
    }

    if (m === 4 || m === 6 || m === 9 || m === 11) {
        return d <= 30 ? true : false;
    }

    return d <= 31 ? true : false;
}

// 해당 날짜의 계절 확인
function isWhatSeason(m) {
    if (3 <= m && m <= 5) {
        return "Spring"
    } else if (6 <= m && m <= 8) {
        return "Summer"
    } else if (9 <= m && m <= 11) {
        return "Fall"
    } else return "Winter"
}

console.log(checkDayandMonth(y, m, d) ? isWhatSeason(m) : -1)