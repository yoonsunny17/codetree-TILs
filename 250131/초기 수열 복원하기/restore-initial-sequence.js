const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = input[1].split(' ').map(Number);

// 1부터 n의 숫자 중 하나를 선택해서, 원래 수열의 idx=0에 해당하는 숫자라고 가정해본다
for (let i=1; i<=n; i++) {
    let origin = [i];

    for (let info of infos) {
        // 인접한 숫자의 정보를 통해 다음 요소를 계산한다
        let calc = info - origin[origin.length - 1];

        // 해당 숫자가 범위를 벗어나면 무효
        if (calc > n || calc < 1) {
            break;
        } else {
            origin.push(info - origin[origin.length-1]);
        }
    }

    // 완성된 배열 안의 숫자가 중복되지 않아야 한다
    if (new Set(origin).size === origin.length) {
        console.log(origin.join(' '));
        break;
    }
}