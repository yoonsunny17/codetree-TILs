const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length: n}, (_, i) => input[i+1].trim().split(' ').map(Number));

let dict = new Map();
let cnt = 0;

for (let info of infos) {
    let [numb, location] = info;

    if (dict.has(numb) === false) {
        // 아직 위치 정보가 들어온 적이 없으면, 넣어준다
        dict.set(numb, location);
    } else {
        // 위치 정보가 들어가 있는데, 새로 받은 위치가 다르면 갱신해주고, cnt++ 한다
        if (dict[numb] !== location) {
            dict[numb] = location;
            cnt++;
        }
    }
}

console.log(cnt);