const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = input[1].split(' ').map(Number);

const checkNumbs = (arr) => {
    for (let info of infos) {
        let calc = info - arr[arr.length-1];

        // 범위를 벗어나는 경우, 빈배열을 반환한다
        if (calc > n || calc < 1) {
            return [];
        }

        arr.push(calc);
    }

    return arr;
}

// 1부터 n의 숫자 중 하나를 선택해서, 원래 수열의 idx=0에 해당하는 숫자라고 가정해본다
for (let i=1; i<=n; i++) {
    let origin = checkNumbs([i]);
    
    // 완성된 수열에 중복된 숫자가 있는지 확인한다
    if (new Set(origin).size === n) {
        console.log(origin.join(' '));
        break;
    }
}