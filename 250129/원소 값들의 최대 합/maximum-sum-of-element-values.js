 const fs = require('fs');
 const input = fs.readFileSync(0).toString().trim().split('\n');

 const [n, m] = input[0].split(' ').map(Number);
 const numbs = input[1].split(' ').map(Number);

 let maxVal = 0;
 // 시작위치로 한번씩 지정해보고 탐색한다
 for (let i=1; i<=n; i++) {
    let start = i;
    let sum = numbs[start-1];
    let move = 1;

    while (move < m) {
        start = numbs[start-1]; // 시작위치를 재 지정한다
        sum += numbs[start-1]; // 더해준다
        move++; // 시작위치 +1 해준다
    }

    maxVal = Math.max(maxVal, sum);
 }

 console.log(maxVal);