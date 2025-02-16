const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

const visited = new Array(n+1).fill(false);
const numbs = [];

const chooseNumber = (curr) => {
    if (curr === n+1) {
        console.log(numbs.join(' '));
        return;
    }

    for (let i=n; i>=1; i--) {
        // 이미 방문한 숫자는 건너뛴다
        if (visited[i]) continue;

        visited[i] = true;
        numbs.push(i);

        chooseNumber(curr+1);

        visited[i] = false;
        numbs.pop();
    }
}

chooseNumber(1);