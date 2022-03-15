'use strict'

const Node = require('./node');


class Stack {
    constructor() {
        this.top = null;
    }


    push(value) {
        const node = new Node(value);
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        console.log(this.top);
    }
    pop() {
        if (this.top == null) {
            console.log("exeption");
            return "exeption";
            
        } else {
            const newTop = this.top.next;
            this.top = newTop;
            console.log(this.top);
            return this.top;
        }
    }
    peek(){
        if(this.top==null){
            console.log("exeption");
            return "exeption";
        }else{
            console.log(this.top);
            return this.top;
        }
    }
    isEmpty(){
        if(this.top==null){
            console.log(true);
            return true;
        }else{
            console.log(false);
            return false;
        } 
    }

}
module.exports = Stack;
// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.pop();
// myStack.isEmpty();
// myStack.peek();