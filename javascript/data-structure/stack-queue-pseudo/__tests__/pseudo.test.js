
'use strict';

const LinkedList =require("../../linked-list/ll");
const PseudoQueue = require('../pseudoQueue');


describe('', () => {
    it('test the new create of pesudoQueueForTest', () => {
        const queue = new PseudoQueue();
        expect(queue).toBeInstanceOf(PseudoQueue);

    })
    })

  it('add to queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    
    expect(queue.dequeue().value).toEqual(10);
    
    expect(queue.dequeue().value).toEqual(20);
    

  }) 
  
})