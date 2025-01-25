const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const totalScore = arr.reduce((total, curr) => total + curr, 0);

let cnt = 0;
let minVal = Number.MAX_SAFE_INTEGER;
// 1명 2명 2명으로 나누어 본다
let firstTeam = 0;
for (let i=0; i<5; i++) {
    for (let j=i+1; j<5; j++) {
        firstTeam = arr[i] + arr[j]; // 첫번째 팀의 점수

        let secondTeam = 0;
        for (let k=0; k<5; k++) {
            for (let l=k+1; l<5; l++) {
                if (k === i || k === j || l === i || l === j) {
                    continue;
                }
                secondTeam = arr[k] + arr[l]; // 두번째 팀의 점수
                
                let thirdTeam = totalScore - firstTeam - secondTeam;

                
                // 모든 팀의 능력치가 서로 달라야 한다
                if (firstTeam === secondTeam || secondTeam === thirdTeam || thirdTeam === firstTeam) {
                    continue;
                }

                cnt++;
                minVal = Math.min(minVal, Math.max(firstTeam, secondTeam, thirdTeam) - Math.min(firstTeam, secondTeam, thirdTeam));
            }
        }
    }
}

console.log(cnt > 0 ? minVal : -1);