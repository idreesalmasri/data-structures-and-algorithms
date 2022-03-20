'use strict'
const Stack = require("../stack/stack");
const Node = require('../stack/node');


class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue = (x) => {
        this.stack1.push(x);
    }

    dequeue = () => {
        while (this.stack1.top!==null) {
            this.stack2.push(this.stack1.pop());
        }

        const item = this.stack2.pop();
        
        return item;

    }
    peek = ()=>{
        return this.stack2.top.value;
    }
    
}
module.exports = PseudoQueue;
// const queue = new PseudoQueue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.peek();



// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.peek());