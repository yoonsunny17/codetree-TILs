fs = require('fs')
n = Number(fs.readFileSync(0).toString())

for (let k=0; k<2; k++) {
    for (let i=0; i<n; i++) {
        let tmp = ''
        for (let j=0; j<n; j++) {
            tmp += '*'
        }
        console.log(tmp)
    }
    console.log('')
}