const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [x, y] = input;

let cnt = 0;
// x이상 y이하의 숫자에 대해서 하나씩 검사해본다
for (let numb=x; numb<=y; numb++) {

    let numbArr = Array.from(String(numb), Number);

    let freq = numbArr.reduce((arr, curr) => {
        arr[curr] = (arr[curr] || 0) + 1;

        return arr;
    }, {});

    // 두 종류의 숫자만 가지고 있고, 한 종류는 하나만 있어야 한다
    if (Object.values(freq).length === 2 && Object.values(freq).includes(1)) {
        cnt++;
    }
}

console.log(cnt);