const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

const insertion = (numbs) => {
    for (let i=1; i<n; i++) {
        let j = i - 1;
        let key = numbs[i];

        while (j >= 0 && numbs[j] > key) {
            numbs[j+1] = numbs[j];
            j--;
        }
        numbs[j+1] = key;
    }
    
    return numbs;
}

console.log(insertion(numbs).join(' '));