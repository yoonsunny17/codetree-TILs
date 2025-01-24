const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let n = arr.length;
const totalScore = arr.reduce((total, curr) => total+curr, 0);

let minVal = Number.MAX_SAFE_INTEGER;
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        for (let k=j+1; k<n; k++) {
            let firstTeam = arr[i] + arr[j] + arr[k];
            
            // 첫번째 팀과 나머지 팀의 차이 최소화인 값으로 갱신해준다
            minVal = Math.min(minVal, Math.abs(totalScore - 2 * firstTeam));
        }
    }
}

console.log(minVal);