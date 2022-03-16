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
        ll.insert('c');
        ll.insert('b');
        ll.insert('a');
        expect(ll.toString()).toEqual("{a}->{b}->{c}->NULL");

    })
})
describe('append to the end of the LL', () => {
    it('add to an empty LL', () => {
        const ll = new LinkedList();
        ll.append('a'); // create a new node (value=a)
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();        

    })
    // 2. if the LL is NOT empty
    it('add to a non-empty LL',()=>{
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
    })
    
});
describe('insert before', () => {
    
    // 2. if the LL is NOT empty
    it('insert before to a non-empty LL',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insertBefore('b','d');
        expect(ll.head.value).toEqual('c');
        expect(ll.head.next.value).toEqual('d');
        expect(ll.head.next.next.value).toEqual('b');
        expect(ll.head.next.next.next.value).toEqual('a');
        expect(ll.head.next.next.next.next).toBeNull();
    })
    
})
describe('insert after', () => {
    
    // 2. if the LL is NOT empty
    it('insert after to a non-empty LL',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insertAfter('b','d');
        expect(ll.head.value).toEqual('c');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('d');
        expect(ll.head.next.next.next.value).toEqual('a');
        expect(ll.head.next.next.next.next).toBeNull();
    })
    it('insert after the last node in LL',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insertAfter('a','d');
        expect(ll.head.value).toEqual('c');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('a');
        expect(ll.head.next.next.next.value).toEqual('d');
        expect(ll.head.next.next.next.next).toBeNull();
    })
})
describe('testing zib two linked list',()=>{
    it('test',()=>{
        const list1=new LinkedList();
        //a->b->c
        list1.insert('c');
        list1.insert('b');
        list1.insert('a');
        const list2=new LinkedList();
        //x->y->z->
        list2.insert('z');
        list2.insert('y');
        list2.insert('x');
        const ll=new LinkedList();
        
        expect(ll.zipLists(list1,list2).toString()).toEqual("{a}->{x}->{b}->{y}->{c}->{z}->NULL");
    })
})
describe("return k-th from the end",()=>{
    it('return k-th from the end',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insert('d');
        ll.insert('e');
        ll.insert('f');
        //head->[f]->[e]->[d]->[c]->[b]->[a]->null
        expect(ll.kthFromEnd(2)).toEqual('c');
        expect(ll.kthFromEnd(1)).toEqual('b');
        expect(ll.kthFromEnd(0)).toEqual('a');
        expect(ll.kthFromEnd(10)).toEqual('Exception');
        expect(ll.kthFromEnd(-1)).toEqual('Exception');
    })
})
