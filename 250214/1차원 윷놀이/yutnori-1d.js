const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

let maxScore = 0;
const selected = [];

const playGame = (selected) => {
    let scores = Array(k).fill(1);

    for (let i=0; i<n; i++) {
        scores[selected[i]] += numbs[i];
    }

    // 완성된 점수판에서, m점 이상인 말의 갯수를 출력한다
    const rlt = scores.filter((score) => score >= m).length;
    return rlt;
}

// 각 턴에 움직일 말을 선택한다
const selectPlayer = (cnt) => {
    // n개의 말을 선택했으면 선택은 끝
    if (cnt === n) {
        let totalScore = playGame(selected); // 완성된 순서대로 점수를 매겨본다
        maxScore = Math.max(maxScore, totalScore); // 얻을 수 있는 점수 최댓값을 갱신한다
        return;
    }

    // 1번부터 k번의 말 중 하나를 선택한다
    for (let i=0; i<k; i++) {
        selected.push(i);
        selectPlayer(cnt+1);
        selected.pop();   
    }
}

selectPlayer(0);

console.log(maxScore);