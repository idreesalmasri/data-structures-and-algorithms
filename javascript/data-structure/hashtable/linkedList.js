'use strict';
const Node=require("./node");
class LinkedList{
    constructor(){
        this.head=null;
    }
    append(val){
        const node=new Node(val);
        if(!this.head){
            this.head=node;
        }else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
    }
}
module.exports=LinkedList;