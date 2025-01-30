const fs = require('fs');
const infos = fs.readFileSync(0).toString().trim().split(' ').map(Number);

infos.sort((a, b) => a - b);

for (let a=1; a<=40; a++) {
    for (let b=a; b<=40; b++) {
        for (let c=b; c<=40; c++) {
            for (let d=c; d<=40; d++) {
                let checkArr = [
                    a, b, c, d,
                    a+b, b+c, c+d, d+a, a+c, b+d,
                    a+b+c, a+b+d, a+c+d, b+c+d,
                    a+b+c+d
                ]

                checkArr.sort((a, b) => a - b);

                let flag = true;
                for (let i=0; i<15; i++) {
                    if (checkArr[i] !== infos[i]) {
                        flag = false;
                        break;
                    }
                }

                if (flag) {
                    console.log(a, b, c, d);
                }
                
            }
        }
    }
}