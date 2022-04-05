'use strict';

// class Stack {
//     constructor() {
//         this.storage = [];
//         this.top = null;
//     }

//     push(item) {
//         this.storage.push(item);
//         this.top=item;
//     }

//     peek(){
//         return this.top;
//     }
//     isEmpty(){
//         if(this.top===null){
//             // console.log(true);
//             return true;
//         }else{
//             // console.log(false);
//             return false;
//         } 
//     }
//     pop() {
//         let poppedItem = this.storage.pop();
//         this.top = this.storage[this.storage.length-1];
//         return poppedItem;
//     }
// }
function validateBrackets(str){
    var depth = 0;
    // for each char in the string : 2 cases
    for(var i in str){   
        if(str[i] == '('||str[i] == '{'||str[i] == '['){
            // if the char is an opening parenthesis then we increase the depth
            depth ++;
        } else if(str[i] == ')'||str[i] == '}'||str[i] == ']') {
            // if the char is an closing parenthesis then we decrease the depth
            depth --;
        }  
        //  if the depth is negative we have a closing parenthesis 
        //  before any matching opening parenthesis
        if (depth < 0) return false;
    }
    // If the depth is not null then a closing parenthesis is missing
    if(depth > 0) return false;
    // OK !
    return true;
}
module.exports={
    validateBrackets:validateBrackets,
    // Stack:Stack
};
