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
            // str=str+"{"+current.value+"}->";
            str+=`{${current.value}}${current.next? "->":"-> null"}`
            current = current.next;
        }
        return str;
        
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
    zipLists(list1, list2){
        //The strategy here uses a temporary dummy node as the start of the result list. The pointer tail always points to the last node in the result list, so appending new nodes is easy. The dummy node gives tail something to point to initially when the result list is empty.
        let dummy=new Node();
        let tail=dummy;
        let currA=list1.head;
        let currB=list2.head;
        while(currA||currB){
            if(currA==null){
                tail.next=currB;
            }else if(currB==null){
                tail.next=currA;
            }else{
                tail.next=currA;
                tail=currA;
                currA=currA.next;

                tail.next=currB;
                tail=currB;
                currB=currB.next
            }
        }
        const result=new LinkedList();
        result.head=dummy.next;
        return result;
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
    insertAt(val,position){
        let node=new Node(val);
        let index=0;
        let curr=this.head;
        let prev;
        if (position<0){
            return "exception";
            
        }
        while(curr){
            // console.log(curr);
            if(index===position){
                node.next=curr;
                prev.next=node;
                
                return;
            }else{
                index=index+1;
                // console.log(index);
                prev=curr;
                curr=curr.next;
            }
        }
        
        return "exxeption"; 
    }
    removeAt(position){
        let curr=this.head;
        let prev;
        let index=0;
        if(position===0){
            this.head=curr.next;
            curr.next=null;
            console.log(curr);
            return curr;
        }
        while(curr){
            if(index===position){
                
                prev.next=curr.next;
                curr.next=null;
                
                console.log(curr);
                return curr;
            }else{
                index=index+1;
                
                prev=curr;
                curr=curr.next;
                
            }
        }
        console.log("exception");
        return "exception";
    }
    removeElement(val){
        let curr=this.head;
        let prev;
        if(val===this.head.value){
        this.head=curr.next;
        curr.next=null;
        console.log(curr);
        return curr;
        }
        while(curr){
            if(curr.value===val){
                prev.next=curr.next;
                curr.next=null;
                console.log(curr);
                return curr;
            }else{
                prev=curr;
                curr=curr.next;
            }
        }
        console.log("exception");
        return "exception"
    }
}
module.exports = LinkedList;
// const link=new LinkedList();
// link.append("a");
// link.append("b");
// link.append("c");
// link.append("d");
// link.append("e");
// // console.log(link.toString());
// // link.insertAt("H",2);
// console.log(link.toString());

// link.removeElement("d");
// console.log(link.toString());
