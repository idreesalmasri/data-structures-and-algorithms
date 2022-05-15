'use strict'

const Node=require("./node");
const LinkedList=require("./linkedList");

class HashTable{
    constructor(size){
        this.size=size;
        this.map=new Array(size);
    }
    hash(key){
        
       let asciiSum=key.split("").reduce((acc,char)=>{
        acc=acc+char.charCodeAt();
        return acc;
       },0);
       let index=(asciiSum*599)%this.size;
       return index;
    }
    set(key,val){
        let hashedKey=this.hash(key);
        if (!this.map[hashedKey]){
            this.map[hashedKey]=new LinkedList();
        }
        let entryData = {[key]:val};
        let current=this.map[hashedKey].head;
        while(current){
            if(current.value[key]){
                current.value[key]=val;
                return;
            }
            current=current.next;
        }
        this.map[hashedKey].append(entryData);
    }
   
    get(key){
        let hashedKey=this.hash(key);
        let current= this.map[hashedKey].head;
        while(current){

            if(current.value[key]){
                return current.value[key];
            }
            current=current.next;
        }
        return null;
    }
    contains(key){
        let hashedKey=this.hash(key);
        if (this.map[hashedKey]){
            let current= this.map[hashedKey].head;
        
        
        while(current){

            if(current.value[key]){
                return true; 
            }
            current=current.next;
        }
        return false; 
    }
    }
    // ==============
    
    keys(){
        let keysArray=[];
        for(let i=0;i<this.size;i++){
            if(this.map[i]){
                let current=this.map[i].head;
                while(current){
                   keysArray.push(Object.keys(current.value).pop()); 
                   
                    current=current.next;
                }
            }
        }
        return keysArray;
    }
}
module.exports=HashTable;



// repeatedWord("hello welcome hello to the world");
// const hashmap01 = new HashTable(3);
// hashmap01.set('Razan','Instructor');
// hashmap01.set('qqqq','Instructor');
// hashmap01.set('wwww','Inst');
// hashmap01.set('Raan','I');
// hashmap01.get('wwww');
// hashmap01.contains("wwww")
// hashmap01.keys();
// console.log(hashmap01);
// console.log(hashmap01.map[2]);
// console.log(hashmap01.map[0]);
// console.log(hashmap01.map[0]);
// console.log(hashmap01.map[1]);
