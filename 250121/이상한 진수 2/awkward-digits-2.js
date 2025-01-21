const fs = require('fs');
let a = fs.readFileSync(0).toString().trim().split('').map(Number);

let maxNumb = -Infinity;
for (let i=0; i<a.length; i++) {
    a[i] = a[i]^1;

    let changedNumb = parseInt(a.join(''), 2); // 2진수를 10진수로 변환한다
    maxNumb = Math.max(maxNumb, changedNumb);

    a[i] = a[i]^1;
}

console.log(maxNumb);