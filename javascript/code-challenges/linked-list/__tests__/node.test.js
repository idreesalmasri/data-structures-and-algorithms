'use strict'; 


const Node=require("../node.js");

describe("testing node class",()=>{
    it ("test creating node instance whith next and value",()=>{
        const value="x";
        const node = new Node(value);
        expect(node).toBeInstanceOf(Node); //test instantiate node
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    })
});