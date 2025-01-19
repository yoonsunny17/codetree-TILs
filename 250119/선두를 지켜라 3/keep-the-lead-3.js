const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const listA = input.slice(1, N+1).map((list) => list.split(' ').map(Number));
const listB = input.slice(N+1).map((list) => list.split(' ').map(Number));

const solution = () => {
    // 각 시간에 얼마나 뛰었는지 계산
    const getDistance = (info) => {
        const distances = [];
        let sum = 0;

        for (let i=0; i<info.length; i++) {
            const [v, t] = info[i];

            for (let j=0; j<t; j++) {
                sum += v;
                distances.push(sum);
            }
        }

        return distances;
    }

    // 매 시간마다 우선순위 체크
    const getComparePriority = (arr1, arr2) => {
        const comparePriority = [];
        const len = Math.max(arr1.length, arr2.length);
        
        for (let i=0; i<len; i++) {
            if (arr1[i] > arr2[i]) {
                comparePriority.push(-1);
            } else if (arr1[i] === arr2[i]) {
                comparePriority.push(0);
            } else if (arr1[i] < arr2[i]) {
                comparePriority.push(1);
            }
        }

        return comparePriority;
    }

    // 우선순위 변화 체크
    const checkChange = () => {
        let cnt = 1;
        for (let i=1; i<compare.length; i++) {
            const prev = compare[i-1];
            const curr = compare[i];
            
            if (prev !== curr) {
                cnt++;
            }
        }

        return cnt;
    }

    const distanceA = getDistance(listA);
    const distanceB = getDistance(listB);
    const compare = getComparePriority(distanceA, distanceB);

    const rlt = checkChange();

    console.log(rlt);
}

solution();