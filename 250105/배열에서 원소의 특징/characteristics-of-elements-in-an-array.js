fs = require('fs')
numbs = fs.readFileSync(0).toString().trim().split(' ')

for (let i=0; i<10; i++) {
    if (numbs[i] % 3 === 0) {
        console.log(numbs[i-1]);
        break;
    }
}