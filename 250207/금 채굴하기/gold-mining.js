const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

// 상 하 좌 우
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

const findGold = (center_r, center_c, k) => {
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    const queue = [[center_r, center_c]];
    visited[center_r][center_c] = true;

    let goldCnt = matrix[center_r][center_c] === 1 ? 1 : 0;

    while (queue.length) {
        const [r, c] = queue.shift();

        for (let d=0; d<4; d++) {
            const rr = r + dr[d];
            const cc = c + dc[d];

            // 다음 탐색 지점이 범위 내에 존재하고, 방문한 적 없고, 마름모를 유지하는 경우
            if (inRange(rr, cc) && !visited[rr][cc] && Math.abs(rr-center_r) + Math.abs(cc-center_c) <= k) {
                visited[rr][cc] = true;
                queue.push([rr, cc]);
                if (matrix[rr][cc] === 1) goldCnt++;
            }
        }
    }

    // 마름모 k에서 드는 비용
    const cost = k * k + (k+1) * (k+1);
    // 비용보다 채굴한 금의 가격이 더 높으면 가격 return
    return goldCnt * m >= cost ? goldCnt : 0;
}

// 가장 많이 채굴할 수 있는 경우
let maxGold = 0;
for (let k=0; k<=2*n; k++) {
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            const gold = findGold(i, j, k);
            maxGold = Math.max(maxGold, gold);
        }
    }
}

console.log(maxGold);