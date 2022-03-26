'use strict';

class Stack {
    constructor() {
        this.storage = [];
        this.top = null;
    }

    push(item) {
        this.storage.push(item);
        this.top=item;
    }

    peek(){
        return this.top;
    }
    isEmpty(){
        if(this.top===null){
            // console.log(true);
            return true;
        }else{
            // console.log(false);
            return false;
        } 
    }
    pop() {
        let poppedItem = this.storage.pop();
        this.top = this.storage[this.storage.length-1];
        return poppedItem;
    }
}
function validateBrackets(string){
let stack=new Stack();
let arr=string.split('');
for (let i=0;i<arr.length;i++){
    let char =stack[stack.length-1];
    if (arr[i]==="("||arr[i]==="{"||arr[i]==="["){
        stack.push(arr[i]);
    } else if((char=="("&&arr[i]==")")||(char=="{"&&arr[i]=="}")||(char=="["&&arr[i]=="]")){
        stack.pop();
    }
}
return stack.length ? false : true;
}
module.exports={
    validateBrackets:validateBrackets,
    Stack:Stack
};
