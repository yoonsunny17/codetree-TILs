const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const numbs = input[0].split(' ').map(Number);

// 애초에 세개만 주어졌다면 세개의 숫자 곱해서 반환한다
if (numbs.length === 3) {
    console.log(numbs[0] * numbs[1] * numbs[2]);
    return;
}

// 양수 배열과 음수 배열을 나누고, 양수는 내림차순, 음수는 오름차순으로 으로 정렬한다
const positive = numbs.filter((n) => n >= 0).sort((a, b) => b - a);
const negative = numbs.filter((n) => n < 0).sort((a, b) => a - b);

// 음수 배열이 비어있는 경우 >> 양수 배열에서 세개 뽑아서 곱한다
// 음수 배열에 하나만 있는 경우 >> 양수 배열에서 세개 뽑아서 곱한다
if (negative.length <= 1) {
    console.log(positive[0] * positive[1] * positive[2]);
    return;
}

// 양수 배열이 비어있는 경우 >> 음수 배열에서 뒤에서 세개 뽑아서 곱한다
if (!positive.length) {
    console.log(negative[negative.length-1] * negative[negative.length-2] * negative[negative.length-3]);
    return;
}

// 양수 배열에 하나만 있는 경우 >> 음수 배열에서 앞에서 두개, 양수 배열 하나를 곱한다
if (positive.length === 1) {
    console.log(positive[0] * negative[0] * negative[1]);
    return;
}

// 양수 배열에 두개만 있는 경우 >> 양수 배열에서 하나, 음수 배열에서 두개를 곱한다
if (positive.length === 2) {
    console.log(positive[0] * negative[0] * negative[1]);
    return;
}

// 나머지 경우 >> 양수 세개 vs 음수두개 양수하나 값 비교해서 최댓값을 뽑는다
let val1 = positive[0] * positive[1] * positive[2];
let val2 = positive[0] * negative[0] * negative[1];

console.log(Math.max(val1, val2));