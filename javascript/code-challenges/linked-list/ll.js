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
    append(value) {
        const node = new Node(value);
        if(!this.head) { 
            this.head = node;
        } else { 
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
    insertBefore(val,newVal){
        const node =new Node(newVal);
        if(!this.head) { //means LL is empty
            this.head = node;
        }else{
            let currentNode = this.head;
            while(currentNode.next != null){
            
                if(currentNode.next.value==val){  
                    node.next=currentNode.next;
                    currentNode.next=node;
                    
                }else{
                currentNode = currentNode.next;//update current node
                }
                return null;
            }
        }
    }
    insertAfter(val,newVal){
        const node =new Node(newVal);
        if(!this.head) { //means LL is empty
            this.head = node;
        }else{
            let currentNode = this.head;
            while(currentNode.next != null){
                currentNode = currentNode.next;
                if(currentNode.value==val){  
                    node.next=currentNode.next;
                    currentNode.next=node;}
            }
        }
    }
}
module.exports = LinkedList;
