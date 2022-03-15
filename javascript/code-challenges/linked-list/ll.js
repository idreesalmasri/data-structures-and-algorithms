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
            str=str+"{"+current.value+"}->";
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
    kthFromEnd(k){
        let currentNode = this.head;
        
        let len=0;
        while(currentNode!=null){
            currentNode = currentNode.next;
            len++;
        }
        if(k>len||k<0){
            let str="Exception";
            return str;
        }
        let currentNode2 = this.head;
        for(let i=0;i<len-k-1;i++){
            currentNode2 = currentNode2.next;
        }
        return currentNode2.value;
    }
    revers(){
        let curr=this.head;
        let prevNode=null;
        let nextnode=null;
        while(curr!=null){
            nextnode=curr.next;
            curr.next=prevNode;
            prevNode=curr;
            curr=nextnode;
        }
        return prevNode;
    }
}
module.exports = LinkedList;
