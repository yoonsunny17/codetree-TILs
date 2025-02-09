// L : unshift(pop())
// R : push(shift())
// 바람이 부는 해당 열의 바로 위, 바로 아래를 확인한다 (r-1, r+1 확인)
// r-1, r+1 이 범위 내에 있는지 먼저 확인하고
// 해당 열에 있는 숫자들 중, r행의 숫자 위치와 동일한게 있는지 체크한다
// 동일한 숫자가 있다면, 반대방향에서 바람을 불어 위치 재정렬한다

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));
const infos = Array.from({length: q}, (_, i) => input[i+1+n].trim().split(' '));

for (let info of infos) {
    let [r, d] = info.map((v, i) => i === 0 ? Number(v)-1 : v);

    // 1. r행에 바람 불어준다
    if (d === 'R') {
        matrix[r].push(matrix[r].shift());
    } else {
        matrix[r].unshift(matrix[r].pop());
    }

    // 2. r행 윗열들에 대해, 같은 열에 같은 숫자가 있는지 확인한다
    let curr_row_up = r;
    let curr_dir_up = d;
    for (let row=curr_row_up-1; row>=0; row--) {
        let flag = false;
        for (let j=0; j<m; j++) {
            if (matrix[row][j] === matrix[curr_row_up][j]) {
                flag = true;
                break;
            }
        }

        // 같은 숫자가 있다면, 바람 불어준다 (반대방향으로)
        if (flag) {
            if (curr_dir_up === 'R') {
                matrix[row].unshift(matrix[row].pop());
            } else {
                matrix[row].push(matrix[row].shift());
            }
        }

        // 기준이 되는 열과 방향을 갱신한다
        curr_row_up = row;
        curr_dir_up = curr_dir_up === 'R' ? 'L' : 'R';
    }

    // 3. r행 아래열들에 대해, 같은 열에 같은 숫자가 있는지 확인한다
    let curr_row_down = r;
    let curr_dir_down = d;
    for (let row=curr_row_down+1; row<n; row++) {
        let flag = false;
        for (let j=0; j<m; j++) {
            if (matrix[row][j] === matrix[curr_row_down][j]) {
                flag = true;
                break;
            }
        }

        // 같은 숫자가 있다면, 바람 불어준다 (반대방향으로)
        if (flag) {
            if (curr_dir_down === 'R') {
                matrix[row].unshift(matrix[row].pop());
            } else {
                matrix[row].push(matrix[row].shift());
            }
        }
        
        // 기준이 되는 열과 방향을 갱신한다
        curr_row_down = row;
        curr_dir_down = curr_dir_down === 'R' ? 'L' : 'R';
    }
}

for (const row of matrix) {
    console.log(row.join(' '));
}
