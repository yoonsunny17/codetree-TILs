const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const [n, m] = input;

let selected = [];
function chooseNumber(idx, cnt) {
    if (cnt === m) {
        console.log(selected.sort((a, b) => a - b).join(' '));
        return;
    }

    for (let i=idx; i<=n; i++) {
        selected.push(i);
        chooseNumber(i+1, cnt+1);
        selected.pop();
    }
}

chooseNumber(1, 0);
// function chooseNumber(idx, cnt) {
//     if (cnt === m) {
//         // m개의 숫자를 선택했다면 오름차순 정렬 후 출력한다
//         console.log(selected.sort((a, b) => a - b).join(' '));
//         return;
//     }

//     // idx 부터 n개의 숫자를 탐색한다 (idx는 1부터 시작)
//     for (let i=idx; i<=n; i++) {
//         selected.push(i);
//         chooseNumber(idx + 1, cnt + 1);
//         selected.pop();
//     }
// }

// chooseNumber(1, 0)