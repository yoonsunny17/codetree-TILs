const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = Array(2000).fill(0);

let point = 1000; // 음수값 조정 
for (let i=0; i<n; i++) {
    const [x, command] = input[i+1].split(' ');

    if (command === 'R') {
        for (let i=point+1; i<=point+Number(x); i++) {
            arr[i]++
        }
        point += Number(x);
    } else {
        for (let i=point; i>point-Number(x); i--) {
            arr[i]++
        }
        point -= Number(x);
    }
};

let cnt = 0;
for (let i of arr) {
    if (i >= 2) cnt++;
}

console.log(cnt);
