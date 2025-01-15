class Info {
    constructor(date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
};

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')


const n = Number(input[0])
let arr = []
for (let i=0; i<n; i++) {
    let [date, day, weather] = input[i+1].split(' ')
    
    if (weather === 'Rain') {
        arr.push(new Info(date, day, weather))
    }
}

let idx = 0
for (let i=0; i<arr.length; i++) {
    if (arr[idx].date > arr[i].date) {
        idx = i
    }
}

console.log(`${arr[idx].date} ${arr[idx].day} ${arr[idx].weather}`)
