const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
const infos = input.map((v) => {
    let [dir, val] = v.split(' ');
    return [dir, Number(val)];
})

let matrix = Array(2000).fill(0).map(() => Array(2000).fill(0));

// 상 하 좌 우 (N S W E)
const dict = {
    'N': 0,
    'S': 1,
    'W': 2,
    'E': 3,
}

// 상 하 좌 우
let dr = [-1, 1, 0, 0], dc = [0, 0, -1, 1];
let r = 1000, c = 1000; // 초기 위치 (1000, 1000)

// 결과 담을 변수
let rlt = -1;
for (let info of infos) {
    let [dir, val] = info;
    
    // val초 동안 반복해준다
    for (let t=1; t<=val; t++) {
        nr = r + dr[dict[dir]], nc = c + dc[dict[dir]];
        
        if (nr === 1000 && nc === 1000) {
            // 초기 지점으로 돌아온 경우
            rlt = matrix[r][c] + 1;
            break;
        } else {
            // 초기 지점이 아닌 경우, 계속 진행
            matrix[nr][nc] = matrix[r][c] + 1;
        }

        // 위치 갱신
        r += dr[dict[dir]], c += dc[dict[dir]];
    }
}

console.log(rlt);