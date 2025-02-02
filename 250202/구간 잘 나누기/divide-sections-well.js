const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbs = input[1].trim().split(' ').map(Number);

// step1. 탐색 볌위 설정 (구간합의 최댓값)
let left = Math.max(...numbs) // 배열의 최댓값보다는 커야한다
let right = numbs.reduce((acc, curr) => acc + curr, 0); // 배열 안의 모든 수를 더한 값보단 작아야한다.

let ans = right; // 최댓값들 중 최솟값을 구하는것이므로 우선 최댓값으로 초기화한다

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = 1; // 구간 개수
    let sum = 0;

    for (let numb of numbs) {
        if (sum + numb > mid) {
            // 현재 최댓값 후보보다 값이 커지면, 새 구간 시작해줘
            cnt++;
            sum = 0;
        }

        sum += numb;
    }

    // step2. m개 이하의 구간으로 나눌 수 있다면, 더 작은 mid가 가능한지 확인해봐
    if (cnt <= m) {
        ans = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(ans);