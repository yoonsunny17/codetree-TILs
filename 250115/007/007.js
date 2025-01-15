const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

let [code, place, time] = input

class Spy {
    constructor(code, place, time) {
        this.code = code;
        this.place = place;
        this.time = time;
    }
}

let spy = new Spy(code, place, time)

console.log(`secret code : ${spy.code}`)
console.log(`meeting point : ${spy.place}`)
console.log(`time : ${spy.time}`)
