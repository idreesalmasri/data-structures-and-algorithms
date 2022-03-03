'use strict';

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if(!this.head) { //means LL is empty
            this.head = node;
        } else { //means LL is not empty
            node.next = this.head;
            this.head = node;
        }
    }
    includes(val){
        let currentNode = this.head;
        while(currentNode != null){
            
            if(val===currentNode.value){  
                return true;
            }else{
            currentNode = currentNode.next;//update current node
            }
        }
        return false;
    }
    toString(){
        let str="";
        let string="";
        let current = this.head;
        while(current != null){
            str="{"+current.value+"}->"+str;
            current = current.next;
        }
        string=str+"NULL";
        return string;
    }
}
module.exports = LinkedList;
