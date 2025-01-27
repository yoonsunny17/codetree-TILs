class Info {
    constructor(p, m, t) {
        this.p = p;
        this.m = m;
        this.t = t;
    }
}

class Record {
    constructor(p, t) {
        this.p = p;
        this.t = t;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, d, s] = input[0].split(' ').map(Number);

const infos = [];
for (let i=1; i<=d; i++) {
    let [p, m, t] = input[i].split(' ').map(Number);

    infos.push(new Info(p, m, t));
}

const records = [];
for (let i=1+d; i<=d+s; i++) {
    let [p, t] = input[i].split(' ').map(Number);

    records.push(new Record(p, t));
}

let rlt = 0;
// 치즈 하나가 상했다고 가정한다
for (let i=1; i<=m; i++) {

    // 각 사람이 언제 i번 치즈를 먹었는지 확인한다
    const time = Array(n+1).fill(0);
    infos.forEach(info => {
        if (info.m !== i) {
            return;
        }

        // i번째 치즈를 처음 먹었거나, 이미 기록된 시간보다 더 빨리 먹은 경우 갱신한다
        const {p: person, t} = info;
        if (time[person] === 0 || time[person] > t) {
            time[person] = t;
        }
    })

    // i번 치즈가 상했을 수 있으면 true, 아니면 false
    let flag = true;
    records.forEach(record => {
        // i번 치즈를 먹지 않았거나, i번 치즈를 먹은 것보다 더 빨리 아프면 false
        const {p: person, t} = record;
        if (time[person] === 0 || time[person] >= t) {
            flag = false;
        }
    })

    // 만약 상했다면, 약 몇개 필요한지 계산한다
    let cnt = 0;
    if (flag) {
        for (let j=1; j<=n; j++) {
            if (time[j] !== 0) {
                cnt++;
            }
        }
    }

    rlt = Math.max(rlt, cnt);
}

console.log(rlt);