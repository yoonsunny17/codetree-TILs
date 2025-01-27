const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));


let maxVal = 0;

// 한명씩 골라서 쿠폰을 적용시킨다
for (let i=0; i<n; i++) {
    let prices = [];
    for (let j=0; j<n; j++) {
        if (j === i) {
            prices.push(parseInt(infos[j][0] / 2) + infos[j][1]);
        } else {
            prices.push(infos[j][0] + infos[j][1]);
        }
    }

    // 쿠폰을 적용한 계산한 가격들을 오름차순으로 정렬한다
    prices.sort((a, b) => a - b);

    // 정렬된 가격 중에서, 예산 안에 살 수 있는 선물의 수를 구한다
    let total = 0;
    let cnt = 0;
    for (let price of prices) {
        // 방금 계산한 결과가 예산 초과한다면 x
        if (total + price > b) {
            break;
        }

        total += price;
        cnt++;
    }

    maxVal = Math.max(maxVal, cnt);
}

console.log(maxVal);