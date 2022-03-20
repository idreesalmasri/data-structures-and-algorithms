
'use strict';


const PseudoQueue = require('../pseudoQueue');


describe('test the pseudoQueue for fifo', () => {
    it('test the new create of queue', () => {
        const queue = new PseudoQueue();

        expect(queue).toBeInstanceOf(PseudoQueue);

    })

  it('test enqueue and dequeue first in first out', () => {
    const queue = new PseudoQueue();
   
    queue.enqueue(10)
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    
    
    expect(queue.dequeue()).toEqual(10);
    expect(queue.peek()).toEqual(20);
    expect(queue.dequeue()).toEqual(20);
    expect(queue.peek()).toEqual(30);
    expect(queue.dequeue()).toEqual(30);
    expect(queue.peek()).toEqual(40);
    expect(queue.dequeue()).toEqual(40);
    

  }) 
  
})