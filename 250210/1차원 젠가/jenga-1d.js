const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let numbs = Array.from({length: n}, (_, i) => Number(input[i+1]));
const infos = Array.from({length: 2}, (_, i) => input[i+1+n].split(' ').map(Number));

for (let info of infos) {
    let [s, e] = info.map((v) => v-1);

    let tmp = [];
    for (let i=0; i<numbs.length; i++) {
        if (i >= s && i <= e) {
            continue;
        } else {
            tmp.push(numbs[i]);
        }
    }

    numbs = tmp;
}

console.log(numbs.length);
console.log(numbs.join('\n'));