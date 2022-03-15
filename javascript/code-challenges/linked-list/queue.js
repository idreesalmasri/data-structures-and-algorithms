'use strict'

const Node = require('./node');

class Queue {
    constructor(){
        this.first=null;
        this.last=null;
    }
    enqueue(value){
        const node = new Node(value);
        if(!this.first){
            this.first=node;
            this.last=node;
        }else{
            this.last.next=node;
            this.last=node;
        }
    }
    dequeue(){
        if(!this.first)return "exeption";
        const temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }
        
            this.first=this.first.next;
            return temp;
        
        
    }
    peek(){
        if(this.first==null){
            console.log("exeption");
            return "exeption";
        }else{
            console.log(this.first);
            return this.first;
        }
    }
    isEmpty(){
        if(thisfirst==null){
            console.log(true);
            return true;
        }else{
            console.log(false);
            return false;
        } 
    }
}
module.exports = Queue;