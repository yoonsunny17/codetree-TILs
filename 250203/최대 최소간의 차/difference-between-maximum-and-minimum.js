const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const numbs = input[1].trim().split(' ').map(Number);

numbs.sort((a, b) => a - b);

let minCost = Number.MAX_SAFE_INTEGER;

for (let i=0; i<n; i++) {
    let left = numbs[i]; // 최솟값
    let right = left + k; // 최댓값

    let cost = 0;
    for (let j=0; j<n; j++) {
        if (numbs[j] < left) {
            // left보다 작은 경우 증가 비용
            cost += (left - numbs[j]);
         } 
        else if (numbs[j] > right) {
            // right보다 큰 경우 감소 비용
            cost += (numbs[j] - right);
        }
    }

    minCost = Math.min(minCost, cost);
}

console.log(minCost);