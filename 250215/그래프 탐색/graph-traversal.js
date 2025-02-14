const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const infos = Array.from({length: m}, (_, i) => input[i+1].split(' ').map(Number));

let cnt = 0; // 도달 가능한 정점 개수 카운트

// 정점끼리 연결된 정보
let graph = Array.from({length: n+1}, () => []);
let visited = Array(n+1).fill(false);

for (let info of infos) {
    let [x, y] = info;

    graph[x].push(y);
    graph[y].push(x);
}

function dfs(vertex) {
    graph[vertex].forEach((currV) => {
        if (!visited[currV]) {
            cnt++;
            visited[currV] = true;
            dfs(currV);
        }
    })
}

dfs(1);
console.log(cnt-1); // 1번 정점 제외하고 계산한다