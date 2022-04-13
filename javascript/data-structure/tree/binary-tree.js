'use strict'
const Node = require("./node.class")

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // Pre-order >> root - left - right
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }


    // In-Order >> left - root - right
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // Post-Order >> left  - right - root
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
   

    max(){
        let arr=this.preOrder();
        let max=0;
        arr.map(ele=>{
            if(ele>max){
                max=ele;
            }
        })
        return max;
    }
    breadthFirst() {
        if (!this.root) return;
        let queue = [this.root];
        let output = []

        while (queue.length > 0) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            output.push(node.value)
        }
        return output;
      }

}

class BinarySearch extends BinaryTree{
    constructor(root=null){
        super();
    }
    add(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);

        }

    }
    insertNode(node, newNode) {

        if (newNode.value < node.value) {

            if (node.left === null) {
                node.left = newNode;
            }

            else {
                this.insertNode(node.left, newNode);
            }

        }
        else {

            if (node.right === null) {
                node.right = newNode;
            }

            else {
                this.insertNode(node.right, newNode);
            }

        }
    }
    contains(value) {
        let current = this.root;

        while (current) {
            // console.log("rrrrrrrr",current.value);
            if (value == current.value) {
                return true;
            };
            current = value < current.value ? current.left : current.right;
        }

        return false;
    };
}


module.exports={
    BinaryTree : BinaryTree,
    BinarySearch : BinarySearch
};
