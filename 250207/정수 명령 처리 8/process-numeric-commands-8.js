class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.nodeNum = 0;
    }

    // 원소를 첫 번째 위치에 넣어준다
    push_front (newData) {
        const newNode = new Node(newData); // 새로운 노드를 만들어준다
        newNode.next = this.head; // 새로운 노드의 next값을 head로 바꿔준다

        if (this.head !== null) { // 기존 리스트가 비어있지 않다면
            this.head.prev = newNode; // 이전 head의 prev 값을 바꿔준 다음
            this.head = newNode; // head값을 변경해준다
        } else { // 기존 리스트가 비어있었다면
            this.head = newNode; // head, tail을 새로 설정해준다
            this.tail = newNode;
        }
        newNode.prev = null;

        this.nodeNum += 1;
    }

    // 원소를 맨 끝 위치에 넣어준다
    push_back (newData) {
        const newNode = new Node(newData); // 새로운 노드를 만들어준다
        newNode.prev = this.tail; // 새로운 노드의 prev 값을 tail로 바꿔준다

        if (this.tail !== null) { // 기존 리스트가 비어있지 않다면
            this.tail.next = newNode; // 이전 tail의 next값을 바꾼 뒤
            this.tail = newNode; // tail 값을 변경해준다
        } else { // 기존 리스트가 비어있었다면
            this.head = newNode; // head, tail을 새로 설정해준다
            this.tail = newNode;
        }
        newNode.next = null;

        this.nodeNum += 1;
    }

    // 첫 번째 수를 빼면서 동시에 그 수를 반환한다
    pop_front () {
        if (this.head === null) {
            console.log("List is Empty");
        } else if (this.head.next === null) { // 노드가 하나 남아있으면
            const tmp = this.head;

            this.head = null; // head값을 none으로 바꿔주고
            this.tail = null; // tail값도 none으로 바꿔주고
            this.nodeNum = 0; // 원소의 수도 0개로 바꾼다

            return tmp.data;
        } else {
            const tmp = this.head;
            tmp.next.prev = null; // 새로 head가 될 노드의 prev값을 지워준다
            this.head = tmp.next; // head값을 새로 갱신해주고
            tmp.next = null; // 이전 head의 next값을 지워준다

            this.nodeNum -= 1;
            return tmp.data;
        }
    }

    // 맨 끝에 있는 수를 빼면서 동시에 그 수를 반환한다
    pop_back () {
        if (this.tail === null) {
            console.log("List is Empty");
        } else if (this.tail.prev === null) { // 노드가 하나 남아있으면
            const tmp = this.tail;

            this.head = null; // head값을 none으로 바꿔주고
            this.tail = null; // tail값도 none으로 바꿔주고
            this.nodeNum = 0; // 원소의 수도 0개로 바꾼다

            return tmp.data;
        } else {
            const tmp = this.tail;
            tmp.prev.next = null; // 새로 tail이 될 노드의 next값을 지워준다
            this.tail = tmp.prev; // tail값을 새로 갱신해주고
            tmp.prev = null; // 이전 tail의 prev값을 지워준다

            this.nodeNum -= 1;
            return tmp.data;
        }
    }

    // 리스트의 크기를 반환한다
    size () {
        return this.nodeNum;
    }

    // 비어있는 경우 true, 아닌 경우 false를 반환한다
    empty () {
        return this.nodeNum === 0 ? 1: 0;
    }

    // 첫 번째 수를 반환한다
    front () {
        if (this.head === null) {
            console.log("List is Empty");
        } else {
            return this.head.data;
        }
    }

    // 맨 끝의 수를 반환한다
    back () {
        if (this.tail === null) {
            console.log("List is Empty");
        } else {
            return this.tail.data;
        }
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const infos = Array.from({length: n}, (_, i) => input[i].split(' '));

let link = new DoublyLinkedList();

for (const info of infos) {
    let [command, numb] = info;

    if (command === 'push_front') {
        link.push_front(Number(numb));
    } else if (command === 'push_back') {
        link.push_back(Number(numb));
    } else if (command === 'pop_front') {
        console.log(link.pop_front());
    } else if (command === 'pop_back') {
        console.log(link.pop_back());
    } else if (command === 'size') {
        console.log(link.size());
    } else if (command === 'empty') {
        console.log(link.empty());
    } else if (command === 'front') {
        console.log(link.front());
    } else {
        console.log(link.back());
    }
}