'use strict';

const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
const BinaryTree = require('../binary-tree');
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

});

describe("binary search",()=>{
    it("add test",()=>{
        let one = new Node(30);
        let two = new Node(20);
        
        let four = new Node(40);
        let five = new Node(10);
        let six = new Node(25);
        
        let eight = new Node(50);
        
        one.left = two;
        one.right = four;
        two.right = six;
        two.left=five;
       four.right=eight;
      let tree = new BinaryTree(one);
      tree.add(35);
      let result=[30,20,10,25,40,35,50];
      expect(tree.preOrder()).toEqual(result)
      tree.add(5);
      let result2=[30,20,10,5,25,40,35,50]
      expect(tree.preOrder()).toEqual(result2);
    
    })
    it("contains test test",()=>{
        let one = new Node(30);
        let two = new Node(20);
        
        let four = new Node(40);
        let five = new Node(10);
        let six = new Node(25);
        
        let eight = new Node(50);
        
        one.left = two;
        one.right = four;
        two.right = six;
        two.left=five;
       four.right=eight;
      let tree = new BinaryTree(one);
      
      expect(tree.contains(45)).toBe(false);
      expect(tree.contains(15)).toBe(false); 

      expect(tree.contains(10)).toEqual(true);
      expect(tree.contains(50)).toEqual(true);
    })
})