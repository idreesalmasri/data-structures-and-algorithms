'use strict'
const Node=require("./node.class")
class BinaryTree {
    constructor(root=null){
        this.root=root;
    }

     // Pre-order >> root - left - right
    preOrder(){
        let result=[];
        let traverse=(node)=>{
            result.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }


    // In-Order >> left - root - right
    inOrder(){
        let result=[];
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
    add(value){
      let  newNode=new Node(value);
        if(this.root === null){
        this.root = newNode;
        }else{
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

module.exports = BinaryTree;
