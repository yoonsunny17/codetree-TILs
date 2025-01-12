const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

function solution(n) {
    let numb = 1
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            process.stdout.write(numb + ' ')
            numb++

            if (numb === 10) numb = 1
        }
        process.stdout.write('\n')
    }
}

solution(n)

// function solution(n) {
//     let numb = 1
//     for (let i=0; i<n; i++) {
//         let str = ''
//         for (let j=0; j<n; j++) {
//             str += `${numb++} `
//             if (numb === 10) numb = 1
//         }
//         console.log(str)
//     }
// }

// solution(n)