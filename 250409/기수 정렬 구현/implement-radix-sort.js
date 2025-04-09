const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ');

const radix_sort = (numbs, k) => {
    // 숫자 자릿수에 대해, 1의 자리부터 확인한다
    for (let pos=k-1; pos>=0; pos--) {
        // 0부터 9까지의 자릿수를 가지고 있는 숫자를 넣어 줄 빈 리스트를 만든다
        let new_numbs = Array.from({length: 10}, () => []);

        // 배열의 숫자에 대해 하나씩 확인한다
        for (let i=0; i<n; i++) {
            // 배열의 i번째 숫자의 pos번째 위치에 적혀있는 숫자를 digit 변수에 저장한다
            let digit = numbs[i][pos];
            // digit에 해당하는 위치에 숫자를 넣어준다
            new_numbs[digit].push(numbs[i]);
        }

        // 정렬된 숫자들을 저장할 배열을 생성한다
        let store_numbs = [];
        // 0부터 9까지 확인한다
        for (let i=0; i<10; i++) {
            // 각 i에 해당하는 숫자들을 store_numbs에 저장해준다
            for (let j=0; j<new_numbs[i].length; j++) {
                store_numbs.push(new_numbs[i][j]);
            }
        }

        // 원래 배열을 store_numbs로 갱신한다
        numbs = store_numbs;
    }

    return numbs;
}

console.log(radix_sort(numbs, 1).join(' '));