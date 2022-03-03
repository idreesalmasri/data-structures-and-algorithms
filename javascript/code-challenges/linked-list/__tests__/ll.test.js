'use strict';

const { describe } = require("eslint/lib/rule-tester/rule-tester");
const LinkedList =require("../ll.js");
//Can successfully instantiate an empty linked list
describe('testing Linked List', () => {
    it('test creating an LL instance', () => {
        const ll = new LinkedList();
        // expect(ll).toBeInstanceOf(LinkedList);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();    
    })
})
describe('insert to the beginning of the LL', () => {
    // we have two cases
    // 1. if the LL is empty
    it('add to an empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a'); // create a new node (value=a)
        //Can properly insert into the linked list
        expect(ll.head.value).toEqual('a'); 
        //The head property will properly point to the first node in the linked list

        expect(ll.head.next).toBeNull();        

    })
    // 2. if the LL is NOT empty
    it('add to a non-empty LL',()=>{
        const ll = new LinkedList();
        //Can properly insert multiple nodes into the linked list

        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
    })
})
describe("test if given value exisit in ll",()=>{
    it('return true when finding a value within the linked list that exists',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.includes('b')).toEqual(true);

    })
    it('return false when searching for a value in the linked list that does not exist',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.includes('d')).toEqual(false);

    })
})
describe("return a collection of all the values that exist in the linked list",()=>{
    it('return a collection of all the values that exist in the linked lis',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.toString()).toEqual("{a}->{b}->{c}->NULL");

    })
})