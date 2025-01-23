const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

// 바구니 위치 잡아줄 리스트 (0번부터 100번까지)
const baskets = Array(101).fill(0);

// 각 바구니 번호에 해당하는 곳에 사탕을 놔준다
for (let info of infos) {
    baskets[info[1]] = info[0];
}

// 중심점 c가 가능한 범위에서 확인해본다
let maxCandy = 0;
for (let c=k; c<101-k; c++) {
    let sumCandy = 0;
    for (let i=c-k; i<=c+k; i++) {
        sumCandy += baskets[i];
    }
    maxCandy = Math.max(maxCandy, sumCandy);
}

console.log(maxCandy);