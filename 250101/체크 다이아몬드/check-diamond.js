fs = require('fs')
n = Number(fs.readFileSync(0).toString())

const size = 2 * n - 1;
let rlt = '';

// 상단부 (중간줄 포함)
for (let i = 0; i < n; i++) {
    // 앞쪽 공백
    for (let j = 0; j < n - 1 - i; j++) {
        rlt += ' ';
    }
    // 별과 공백 패턴
    for (let j = 0; j <= i; j++) {
        rlt += '*';
        if (j < i) {
            rlt += ' ';
        }
    }
    rlt += '\n';
}

// 하단부
for (let i = n - 2; i >= 0; i--) {
    // 앞쪽 공백
    for (let j = 0; j < n - 1 - i; j++) {
        rlt += ' ';
    }
    // 별과 공백 패턴
    for (let j = 0; j <= i; j++) {
        rlt += '*';
        if (j < i) {
            rlt += ' ';
        }
    }
    rlt += '\n';
}

console.log(rlt)
