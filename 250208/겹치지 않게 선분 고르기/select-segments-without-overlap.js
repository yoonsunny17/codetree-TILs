const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = input.slice(1).map(line => line.split(' ').map(Number));

const visited = Array(n).fill(false);
let maxCnt = 0;

function backtracking(curr, selected) {
    if (curr === n) {
        maxCnt = Math.max(maxCnt, selected.length);
        return;
    }

    // 현재 선분을 선택하지 않는 경우
    backtracking(curr+1, selected);

    // 현재 선분을 선택하는 경우
    if (!visited[curr]) {
        const [start, end] = infos[curr];
        let canSelect = true;

        // 이미 선택된 선분들과 겹치는지 확인
        for (let line of selected) {
            const [s, e] = line;
            if (!(end < s || e < start)) {
                // 겹치는 경우라면 선택될 수 없다
                canSelect = false;
                break;
            }
        }

        if (canSelect) {
            // 겹치지 않는 경우라면 선택할 수 있다
            visited[curr] = true;
            selected.push(infos[curr]);
            backtracking(curr+1, selected);
            selected.pop();
            visited[curr] = false;
        }
    }
}

backtracking(0, []);
console.log(maxCnt);
