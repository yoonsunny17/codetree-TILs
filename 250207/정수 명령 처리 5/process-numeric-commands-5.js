const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' '));

let arr = [];
for (let info of infos) {
    let [command, numb] = info;
    
    if (command === 'push_back') {
        arr.push(Number(numb));
    } else if (command === 'pop_back') {
        arr.pop();
    } else if (command === 'size') {
        console.log(arr.length);
    } else {
        console.log(arr[Number(numb)-1]);
    }
}
