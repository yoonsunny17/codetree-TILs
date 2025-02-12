const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let numbs = Array.from({length: n}, (_, i) => Number(input[i+1]));

while (true) {
    // prev = 이전의 값(비교대상), cnt = 동일한 숫자 몇개인지, check = 동일한 숫자에 대한 인덱스 저장 배열
    let [prev, cnt, check] = [numbs[0], 1, [0]];
    // 초기화 (idx=0인 수로 초기화한다)
    let rlt = [];
    let flag = false;

    for (let i=1; i<n; i++) {
        // 만약 직전의 숫자와 다르다면
        if (numbs[i] !== prev) {
            // 지금까지 카운트 된 숫자가 m 이상인지 확인하고
            if (cnt >= m) {
                // m 이상이라면 check배열에 있는 숫자들을 rlt 배열에 넣어주고
                // prev, cnt 초기화한다
                rlt.push(...check);
                flag = true;
            } 
            check = [i];
            prev = numbs[i];
            cnt = 1;
        } else {
            // 직전의 숫자와 동일하다면 check배열에 넣고, prev 갱신 필요없고, cnt 1 증가한다
            check.push(i);
            cnt++;
        }
    }

    // 마지막 그룹에 대해 m 이상이라면 넣어준다
    if (cnt >= m) {
        rlt.push(...check)
    }

    // 제거될 인덱스 배열의 값은 제거한다
    numbs = numbs.filter((_, index) => !rlt.includes(index))

    // 다 체크했는데 더이상 폭발할 수 없다면 끝
    if (!flag) break;
}

console.log(numbs.length);
numbs.forEach((v) => console.log(v))