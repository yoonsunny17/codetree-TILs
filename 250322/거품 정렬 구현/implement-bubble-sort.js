const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

function bubbleSort(arr) {
    let len = arr.length;

    for (let i=0; i<len-1; i++) {
        for (let j=0; j<len-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }

    return arr.join(' ');
}

console.log(bubbleSort(numbs));