'use strict';


const { describe } = require('eslint/lib/rule-tester/rule-tester');
const {BinaryTree} = require('../binary-tree');
const {BinarySearch}=require("../binary-tree")
const Node = require('../node.class');
let tree = null;

describe("successfully instantiate an empty tree",()=>{
    it('successfully instantiate an empty tree ',()=>{
        let newTree = new BinaryTree();
        expect(newTree instanceof BinaryTree).toBeTruthy();
        expect(newTree.root).toBeNull();
        
    });
})
describe('Binary Tree', ()=>{


    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        // this based on our example that we mentioned in the class
        // see attached image (tree-example.png)
        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        // create a tree and pass root to it
        tree = new BinaryTree(one);
    });

    it('constructor', ()=>{
        expect(tree.root.value).toEqual(1);
    });

    it('preOrder', ()=> {
        let expectedOutput = [1,2,6,7,8,9,3,4,5];
        let preOrder = tree.preOrder();
        // console.log("preOrder output ---->", preOrder);
        expect(preOrder).toEqual(expectedOutput);
    });

    it('inOrder', ()=> {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        // console.log("inOrder output ---->", inOrder);
        expect(inOrder).toEqual(expectedOutput);
    });

    it('postOrder', ()=> {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        // console.log("postOrder output ---->", postOrder);
        expect(postOrder).toEqual(expectedOutput);
    });
    it(' the maximum value stored in the tree', () => {
         expect(tree.max()).toEqual(9);
    });


});


describe('testing Binary search tree',()=>{
    let tree=null;
    beforeAll( ()=>{

     tree = new BinarySearch();
     tree.add(100);
     tree.add(60);
     tree.add(150);
     tree.add(50);
     tree.add(80);
     tree.add(140);
     tree.add(160);
  

 }
 )
 it('testing the root value',()=>{
     expect(tree.root.value).toEqual(100)
 })
 it('testing the preOrder method',()=>{
     let output = [100,60,50,80,150,140,160];
     expect(tree.preOrder()).toEqual(output)

 })

  
 it('testing the contains method',()=>{
     expect(tree.contains(160)).toBe(true);
     expect(tree.contains(90)).toBe(false);

 })
 
})
describe("tree-breadth-first",()=>{
    beforeAll( ()=>{
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);
        const node5 = new Node(5);
        node1.left = node2;
        node1.right = node3;
        node2.left = node4;
        node2.right = node5;
       let testTree = new BinaryTree(node1);
    })
    it('breadth first', () => {
        let node1 = new Node(1);
        let tree3 = new BinaryTree(node1);
        let node2 = new Node(2);
        node1.left=node2;
        let node3 = new Node(3);
        node1.right=node3;
        let node4 = new Node(4);
        node2.left=node4;
        let arr = [1, 2, 3, 4];
        let newRR=tree3.breadthFirst();
        console.log(newRR);
        expect(newRR).toEqual(arr);
      });
})