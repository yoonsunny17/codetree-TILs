const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const memo = Array.from({length: n+1}, () => -1);

const fibo = (n) => {
    // 이미 n번째 값이 구해져있다면 그 값을 리턴한다
    if (memo[n] !== -1) {
        return memo[n];
    }

    if (n <= 2) {
        // 첫번째 원소와 두번재 원소는 1이다
        memo[n] = 1;
    } else {
        // 조건 만족할 때 까지 더해나간다
        memo[n] = fibo(n-1) + fibo(n-2);
    }

    return memo[n];
}

console.log(fibo(n));