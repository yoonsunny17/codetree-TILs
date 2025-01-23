const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' '));

// 0번부터 100번까지의 위치를 체크해줄 리스트
let arr = Array(101).fill('');

// 주어진 정보 하나씩 보면서 위치를 체크한다
// 가장 맨 왼쪽에 서있는 사람의 위치를 찾아준다
let len = 0;
for (let info of infos) {
    arr[Number(info[0])] = info[1];
    len = Math.max(len, Number(info[0]));
}

// 양 끝의 좌표(범위 좌표)를 찍어준다
let maxSize = 0;
for (let i=0; i<len+1; i++) {
    let cntG = 0, cntH = 0;
    for (let j=i; j<len+1; j++) {
        
        // 구간 내의 알파벳 개수를 체크한다
        for (let k=i; k<j+i-1; k++) {
            if (arr[k] === 'G') {
                cntG++;
            } else if (arr[k] === 'H') {
                cntH++;
            }
        }

        // 만약 세개의 조건 중 하나를 만족한다면, 사진의 크기 최댓값을 갱신한다
        if ((cntG === 0 && cntH > 0) || (cntG > 0 && cntH === 0) || (cntG > 0 && cntH > 0 && cntG === cntH)) {
            maxSize = Math.max(maxSize, j-i);
        }
    }
}

console.log(maxSize);