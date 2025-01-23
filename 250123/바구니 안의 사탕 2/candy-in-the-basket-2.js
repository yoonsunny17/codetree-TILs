const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

// 바구니 위치 잡아줄 리스트 (0번부터 100번까지)
const baskets = Array(101).fill(0);

// 각 바구니 번호에 해당하는 곳에 사탕을 놔준다 ()
for (let info of infos) {
    baskets[info[1]] += info[0];
}

// 중심점 c가 가능한 범위에서 확인해본다
let maxCandy = 0;

// 근데 k가 절반 이상이면, 어짜피 모두 포함하는거니까 모든 사탕의 개수를 출력하고 끝낸다
if (k >= 51) {
    console.log(baskets.reduce((total, curr) => total + curr, 0));
    return;
}

// k가 절반보다 작으면, 구간을 계산해준다
for (let c=k; c<101-k; c++) {
    let sumCandy = 0;
    for (let i=c-k; i<=c+k; i++) {
        sumCandy += baskets[i];
    }
    maxCandy = Math.max(maxCandy, sumCandy);
}

console.log(maxCandy);