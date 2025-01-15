class Info {
    constructor(name, addr, city) {
        this.name = name;
        this.addr = addr;
        this.city = city;
    }
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])

const arr = []
for (let i=0; i<n; i++) {
    const [name, addr, city] = input[i+1].split(' ')
    arr.push(new Info(name, addr, city))
}

let idx = 0
for (let i=0; i<n; i++) {
    if (arr[idx].name < arr[i].name) {
        idx = i
    }
}

console.log(`name ${arr[idx].name}`)
console.log(`addr ${arr[idx].addr}`)
console.log(`city ${arr[idx].city}`)