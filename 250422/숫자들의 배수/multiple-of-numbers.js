const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let check = 0;
let arr = new Array();
let numb = n;
while (check !== 2) {
    // 5의 배수인 경우 체크
    if (numb % 5 === 0) {
        check++;
    }

    // 입력받은 값의 배수인 경우 배열에 저장
    if (numb % n === 0) {
        arr.push(numb);
    }

    numb += n;
}

console.log(arr.join(' '));