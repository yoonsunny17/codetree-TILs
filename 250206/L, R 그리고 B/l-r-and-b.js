const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const matrix = Array.from({length: 10}, (_, i) => input[i].split(''));
const visited = Array.from({length: 10}, () => Array(10).fill(false));

// 범위내 존재하는지 판별해준다
const inRange = (r, c) => r >= 0 && r < 10 && c >= 0 && c < 10;

// 상 하 좌 우
dr = [-1, 1, 0, 0];
dc = [0, 0, -1, 1];

// 시작 지점인 L을 찾는다
let queue = [];
for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
        if (matrix[i][j] === 'L') {
            // 시작점을 큐에 넣어주고, 방문 표시 해준다
            queue.push([i, j, 0]);
            visited[i][j] = true;
        }
    }
}

// 큐가 빌 때까지 탐색해본다
while (queue.length) {
    let [r, c, cnt] = queue.shift(); // FIFO

    for (let d=0; d<4; d++) {
        rr = r + dr[d];
        cc = c + dc[d];

        // 범위 내에 있고, 방문한 적이 없는 경우 탐색 가능
        if (inRange(rr, cc) && !visited[rr][cc]) {
            if (matrix[rr][cc] === '.') {
                // 지나갈 수 있는 곳이라면 (.인 곳이라면) 다음 탐색 지점으로 넘겨주고, 방문 처리 한다
                queue.push([rr, cc, cnt+1]);
                visited[rr][cc] = true;
            } else if (matrix[rr][cc] === 'B') {
                // B 지점에 도착했으면 지나온 거리 출력하고 끝낸다
                console.log(cnt);
                return;
            }
        }
    }
}