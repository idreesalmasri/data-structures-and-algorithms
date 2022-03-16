'use sticrt'

const Stack=require("../stack.js");
describe("testing stack ",()=>{
    it('successfully instantiate an empty stack',()=>{
        let newStack = new Stack();
        expect(newStack instanceof Stack).toBeTruthy();
        expect(newStack.top).toBeNull();
        
    });
    it('testing push to the stack multiplie times',()=>{
        let newStack = new Stack();
        newStack.push(1);
        expect(newStack.top.value).toEqual(1)
        newStack.push(2);
        expect(newStack.top.value).toEqual(2)
    });
    it('testing pop from the stack && empty a stack after multiple pops&& pop empty stack return exeption',()=>{
        let newStack = new Stack();
        expect(newStack.pop()).toEqual("exeption");
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        expect(newStack.pop().value).toEqual(2);
        expect(newStack.pop().value).toEqual(1);
        expect(newStack.pop()).toBe(null);
    });
    it('testing successfully peek the next item and return exeption when the stack is empty',()=>{
        let newStack = new Stack();
        expect(newStack.peek()).toEqual("exeption");
        newStack.push(1);
        expect(newStack.peek().value).toEqual(1);
        newStack.push(2);
        expect(newStack.peek().value).toEqual(2);
        newStack.push(3);
        expect(newStack.peek().value).toEqual(3);
        
    });
})
