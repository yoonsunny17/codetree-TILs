const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

const selectionSort = (numbs) => {
    for (let i=0; i<n-1; i++) {
        let minIdx = i;

        for (let j=i+1; j<n; j++) {
            if (numbs[j] < numbs[minIdx]) {
                minIdx = j;
            }
        }

        let tmp = numbs[i];
        numbs[i] = numbs[minIdx];
        numbs[minIdx] = tmp;
    }

    return numbs;
}

console.log(selectionSort(numbs).join(' '));