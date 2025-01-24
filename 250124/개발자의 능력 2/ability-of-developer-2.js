const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 오름차순으로 정렬해준다
numbs.sort((a, b) => a - b);

// 1등 + 6등, 2등 + 5등, 3등 + 4등 수를 비교한다
const team_one = numbs[0] + numbs[5];
const team_two = numbs[1] + numbs[4];
const team_three = numbs[2] + numbs[3]

console.log(Math.max(team_one, team_two, team_three) - Math.min(team_one, team_two, team_three));