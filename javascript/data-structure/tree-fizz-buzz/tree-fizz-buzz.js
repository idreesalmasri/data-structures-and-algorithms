"use strict";
const Node = require('./node')
class fizz_buzz {
    constructor(root = null) {
        this.root = root;
    }
    tree_fizz_buzz() {
        if (!this.root) return;
        let queue = [this.root];
        
        let child = []
        while (queue.length > 0) {
            let node = queue.shift()
            

            if (node.value % 5 == 0 && node.value % 3 == 0) {
                child.push('fizzbuzz')
            } else if (node.value % 3 == 0) {
                child.push('fizz')
            } else if (node.value % 5 == 0) {
                child.push('buzz')
            } else {
                child.push(node.value.toString())
            }

            node.children.map(node => {
                queue.push(node)
            })
            

        }

        return  child ;
    }

}

module.exports =fizz_buzz;

