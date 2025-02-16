const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const visited = new Array(n+1).fill(false);
const numbs = [];

const chooseNumber = (curr) => {
    if (curr === n + 1) {
        console.log(numbs.join(' '));
        return;
    }

    for (let i=1; i<=n; i++) {
        // 해당 숫자를 이미 넣었다면 건너뛰자
        if (visited[i]) continue;

        visited[i] = true;
        numbs.push(i);

        chooseNumber(curr+1);

        visited[i] = false;
        numbs.pop();
    }
}

chooseNumber(1);