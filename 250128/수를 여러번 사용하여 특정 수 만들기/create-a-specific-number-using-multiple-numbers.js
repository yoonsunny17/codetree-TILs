const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b, c] = input;

// A를 0번부터 곱했을 때 c이하인 수들을 배열에 담는다
// B를 0번부터 곱했을 때 c이하인 수들을 배열에 담는다

const newNumbList = (numb) => {
    let cnt = 0;
    let list = [];
    while (true) {
        if (cnt * numb > c) {
            break;
        }
        list.push(cnt * numb);
        cnt++;
    }

    return list
}

let a_list = newNumbList(a);
let b_list = newNumbList(b);

// 두 배열을 탐색하면서, 합한 값이 c 이하의 최댓값인지 확인하고 갱신한다
let maxVal = 0;
for (let i=0; i<a_list.length; i++) {
    for (let j=0; j<b_list.length; j++) {
        if (a_list[i] + b_list[j] <= c) {
            maxVal = Math.max(maxVal, a_list[i] + b_list[j])
        }
    }
}

console.log(maxVal);