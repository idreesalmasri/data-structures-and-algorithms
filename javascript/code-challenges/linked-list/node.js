'use strict';

class Node {
    constructor(value,next=null) {
        this.value=value;
        this.next = next;
    }
}
module.exports = Node;


//Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.