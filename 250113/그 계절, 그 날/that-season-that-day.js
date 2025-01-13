const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [y, m, d] = input;

function isYoonYear(y) {
    if (y % 400 === 0) return true;
    if (y % 100 === 0) return false;
    return y % 4 === 0;
}

function checkDayandMonth(y, m, d) {
    if (m === 2) {
        return isYoonYear(y) ? d <= 29 : d <= 28;
    }

    if ([4, 6, 9, 11].includes(m)) {
        return d <= 30;
    }

    return true;
}

function isWhatSeason(m) {
    if (m >= 3 && m <= 5) {
        return "Spring";
    } else if (m >= 6 && m <= 8) {
        return "Summer";
    } else if (m >= 9 && m <= 11) {
        return "Fall";
    } else {
        return "Winter";
    }
}

console.log(checkDayandMonth(y, m, d) ? isWhatSeason(m) : -1);