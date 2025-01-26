const isRightTriangle = (p1, p2, p3) => {
    // 두 점 사이의 거리 계산
    const dist = (a, b) => {
        return (a[0]-b[0]) ** 2 + (a[1]-b[1]) ** 2;
    }

    // 세 변의 길이 계산
    const d1 = dist(p1, p2);
    const d2 = dist(p2, p3);
    const d3 = dist(p3, p1);

    // 각 변의 길이**2를 오름차순으로 정리한다
    const arr = [d1, d2, d3].sort((a, b) => a-b);

    // 한 변의 길이가 x축과 평행한지 확인
    // 한 변의 길이가 y축과 평행한지 확인
    const isParallelX = (p1[1] === p2[1] || p2[1] === p3[1] || p3[1] === p1[1]);
    const isParallelY = (p1[0] === p2[0] || p2[0] === p3[0] || p3[0] === p1[0]);

    // 두 변이 평행을 만족하고, 피타고라스 정리 만족하면 true
    return isParallelX && isParallelY && arr[0] + arr[1] === arr[2];
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

// 최대 넓이 출력할 변수
let maxVal = 0;

// 주어진 점들 중에서, 세 개의 점을 고른다
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        for (let k=j+1; k<n; k++) {
            // 세 좌표로 직각삼각형이 가능한지 확인한다
            if (isRightTriangle(infos[i], infos[j], infos[k])) {
                // 삼각형의 넓이 최댓값 갱신한다
                let [x1, y1] = infos[i];
                let [x2, y2] = infos[j];
                let [x3, y3] = infos[k];

                let calc = Math.abs((x1*y2 + x2*y3 + x3*y1) - (x2*y1 + x3*y2 + x1*y3));

                maxVal = Math.max(maxVal, calc);
            }
        }
    }
}
console.log(maxVal);