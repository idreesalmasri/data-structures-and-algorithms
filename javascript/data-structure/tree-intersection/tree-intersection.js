'use strict';

const HashTable = require('../../data-structure/hashtable/hashTable');

function tree_intersection(tree1, tree2){
  
  let tree1Nodes = tree1.preOrder();
  let tree2Nodes = tree2.preOrder();
//   let size = ()=>{
//       if(tree1Nodes.length > tree2Nodes.length){
//       return tree1Nodes.length
//   }else{
//       return tree2Nodes.length
//   }
// }
  let size = tree1Nodes.length > tree2Nodes.length ? tree1Nodes.length : tree2Nodes.length;
  let hashTable = new HashTable(size);
  let result = [];
  tree1Nodes.map(element => {
    hashTable.set(`${element}`, element);
  });
  tree2Nodes.map(element => {
    if(hashTable.contains(`${element}`)){
      result.push(element);
    }
  });
  return result;
}

module.exports = tree_intersection;