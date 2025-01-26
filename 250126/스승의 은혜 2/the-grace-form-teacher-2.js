const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input.shift().split(' ').map(Number);
const prices = Array.from({length: n}, (_, i) => Number(input[i]));

let maxVal = 0; // 가능한 최대 인원 출력할 변수

// 할인받을 선물 하나를 고른다
for (let i=0; i<n; i++) {
    let changedPrices = [];
    for (let j=0; j<n; j++) {
        if (i === j) {
            changedPrices.push(prices[j]/2);
        } else {
            changedPrices.push(prices[j]);
        }
    }

    // 가격을 오름차순 정렬한 뒤, 예산 안에서 몇명 살 수 있는지 확인한다
    changedPrices.sort((a, b) => a - b);

    let cnt = 0; // 최대 몇명까지 사줄 수 있는지 세어줄 변수
    let calc = 0;
    for (let c of changedPrices) {
        calc += c;
        
        // 해당 가격을 더했을 때 예산 초과하면 x
        if (calc > b) {
            break;
        } else {
            cnt++;
        }
    }

    maxVal = Math.max(maxVal, cnt);    
}

console.log(maxVal);