const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const infos = Array.from({length: m}, (_, i) => input[i+1].split(' ').map(Number));

// 주어진 배열들을 정렬한다 (작은수, 큰수) > stringify 해준다
infos.forEach((info) => {
    info.sort((a, b) => a - b).join('');
})

// 각 요소의 빈도수를 체크한다
const freq = {};
infos.forEach((info) => {
    freq[info] = (freq[info] || 0) + 1;
})

console.log(Math.max(...Object.values(freq)))