const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [t, a, b] = input[0].split(' ').map(Number);
const infos = Array.from({length: t}, (_, i) => input[i+1].split(' '));

let dict = {};
for (let info of infos) {
    let c = info[0], x = Number(info[1]);

    if (!dict[c]) {
        dict[c] = [x];
    } else {
        dict[c].push(x);
    }
}

let rlt = 0;
for (let numb=a; numb<=b; numb++) {
    // S, N까지의 거리 중 최솟값들을 구해본다
    let dist1 = Number.MAX_SAFE_INTEGER, dist2 = Number.MAX_SAFE_INTEGER;
    for (let [k, v] of Object.entries(dict)) {
        for (let i=0; i<v.length; i++) {
            if (k === 'S') {
                dist1 = Math.min(Math.abs(v[i]-numb), dist1);
            } else {
                dist2 = Math.min(Math.abs(v[i]-numb), dist2);
            }
        }
    }

    // s까지의 거리가 N까지의 거리보다 같거나 작으면 특별한 위치이다
    if (dist1 <= dist2) {
        rlt++;
    }
}

console.log(rlt);