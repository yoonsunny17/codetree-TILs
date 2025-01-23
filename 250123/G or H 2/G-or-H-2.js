const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_NUM = 100;

const n = Number(input.shift());
const arr = Array(MAX_NUM+1).fill(0); // 0번부터 100번까지 번호 가지는 배열

for (let i=0; i<n; i++) {
    const [position, c] = input[i].split(' ');
    
    // G면 1, H면 2를 넣어준다
    arr[Number(position)] = c === 'G' ? 1 : 2;
}

// 모든 구간의 시작점을 잡아보자
let maxSize = 0;
for (let i=0; i<=MAX_NUM; i++) {
    for (let j=i+1; j<=MAX_NUM; j++) {
        // i와 j 위치에 사람이 없다면 건너 뛴다
        if (arr[i] === 0 || arr[j] === 0) {
            continue;
        }

        // 해당 구간에 G, H 갯수 세어준다
        let cntG = 0, cntH = 0;
        for (let k=i; k<=j; k++) {
            if (arr[k] === 1) cntG++;
            if (arr[k] === 2) cntH++;
        }

        // 조건 만족하는 경우 구간의 길이 최댓값 갱신해준다
        if (cntG === 0 || cntH === 0 || cntG === cntH) {
            maxSize = Math.max(maxSize, j-i);
        }
    }
}

console.log(maxSize);