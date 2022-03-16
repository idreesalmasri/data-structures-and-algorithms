'use strict'

const Queue=require("../queue");
describe("testing stack ",()=>{
    it('Can successfully instantiate an empty queue',()=>{
        let newQueue = new Queue();
        expect(newQueue instanceof Queue).toBeTruthy();
        expect(newQueue.first).toBeNull();
        
    });
    it('testing enqueue into a queue multiplie times',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(1);
        expect(newQueue.first.value).toEqual(1)
        expect(newQueue.last.value).toEqual(1)
        newQueue.enqueue(2);
        expect(newQueue.first.value).toEqual(1)
        expect(newQueue.last.value).toEqual(2)
    });
    it('testing dequeue from the queue && empty a queue after multiple pops&& pop empty queue return exeption',()=>{
        let newQueue = new Queue();
        expect(newQueue.dequeue()).toEqual("exeption");
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        expect(newQueue.dequeue().value).toEqual(1);
        expect(newQueue.dequeue().value).toEqual(2);
        expect(newQueue.dequeue().value).toEqual(3);
        expect(newQueue.dequeue()).toEqual("exeption")
    });
    it('testing successfully peek the next item and return exeption when the queue is empty',()=>{
        let newQueue = new Queue();
        expect(newQueue.peek()).toEqual("exeption");
        newQueue.enqueue(1);
        expect(newQueue.peek().value).toEqual(1);
        newQueue.enqueue(2);
        expect(newQueue.peek().value).toEqual(1);
        newQueue.enqueue(3);
        expect(newQueue.peek().value).toEqual(1);
        
    });
})