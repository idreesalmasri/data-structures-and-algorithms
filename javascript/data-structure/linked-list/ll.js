"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      //means LL is empty
      this.head = node;
    } else {
      //means LL is not empty
      node.next = this.head;
      this.head = node;
    }
  }
  includes(val) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (val === currentNode.value) {
        return true;
      } else {
        currentNode = currentNode.next; //update current node
      }
    }
    return false;
  }
  toString() {
    let str = "";
    let string = "";
    let current = this.head;
    while (current != null) {
      // str=str+"{"+current.value+"}->";
      str += `{${current.value}}${current.next ? "->" : "->NULL"}`;
      current = current.next;
    }
    return str;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node
      node.next=null;
    }
  }
  insertBefore(val, newVal) {
    const node = new Node(newVal);
    if (!this.head) {
      //means LL is empty
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        if (currentNode.next.value == val) {
          node.next = currentNode.next;
          currentNode.next = node;
        } else {
          currentNode = currentNode.next; //update current node
        }
        return null;
      }
    }
  }
  insertAfter(val, newVal) {
    const node = new Node(newVal);
    if (!this.head) {
      //means LL is empty
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
        if (currentNode.value == val) {
          node.next = currentNode.next;
          currentNode.next = node;
        }
      }
    }
  }
  // zipLists(list1, list2) {
  //   //The strategy here uses a temporary dummy node as the start of the result list. The pointer tail always points to the last node in the result list, so appending new nodes is easy. The dummy node gives tail something to point to initially when the result list is empty.
  //   let dummy = new Node();
  //   let tail = dummy;
  //   let currA = list1.head;
  //   let currB = list2.head;
  //   console.log(currA.value);
  //   console.log(currB.value);
  //   while (currA&&currB) {
  //    if(currA.value<=currB.value){
  //      tail.next=currA;
       
  //     //  console.log(currA);
  //      currA=currA.next;
  //     //  console.log(currA);
  //     //  tail.next=null;
  //    }else{
  //     tail.next=currB;
  //     console.log("bb");
  //     currA=currB.next;
  //     // tail.next=null;
  //    }
  //    tail=tail.next;
  //   }
  //   if(currA){
  //     tail.next=currA
  //   }
  //   if(currB){
  //     tail.next=currB
  //   }
  //   console.log(dummy.next);
  //   // const result = new LinkedList();
  //   // result.head = dummy.next;
  //   // console.log(result);
  //   // return result;
  // }

  kthFromEnd(k) {
    let currentNode = this.head;

    let len = 0;
    while (currentNode != null) {
      currentNode = currentNode.next;
      len++;
    }
    if (k > len || k < 0) {
      let str = "Exception";
      return str;
    }
    let currentNode2 = this.head;
    for (let i = 0; i < len - k - 1; i++) {
      currentNode2 = currentNode2.next;
    }
    return currentNode2.value;
  }
  revers() {
    let curr = this.head;
    let prevNode = null;
    let nextnode = null;
    while (curr != null) {
      nextnode = curr.next;
      curr.next = prevNode;
      prevNode = curr;
      curr = nextnode;
    }
    return prevNode;
  }
  insertAt(val, position) {
    let node = new Node(val);
    let index = 0;
    let curr = this.head;
    let prev;
    if (position < 0) {
      return "exception";
    }
    if(position===0){
      node.next=curr;
      this.head=node
      return;
    }
    while (curr) {
      // console.log(curr);
      if (index === position) {
        node.next = curr;
        prev.next = node;

        return;
      } else {
        index = index + 1;
        // console.log(index);
        prev = curr;
        curr = curr.next;
      }
    }

    return "exxeption";
  }
  removeAt(position) {
    let curr = this.head;
    let prev;
    let index = 0;
    if (position === 0) {
      this.head = curr.next;
      curr.next = null;
      console.log(curr);
      return curr;
    }
    while (curr) {
      if (index === position) {
        prev.next = curr.next;
        curr.next = null;

        console.log(curr);
        return curr;
      } else {
        index = index + 1;

        prev = curr;
        curr = curr.next;
      }
    }
    console.log("exception");
    return "exception";
  }
  removeElement(val) {
    let curr = this.head;
    let prev;
    if (val === this.head.value) {
      this.head = curr.next;
      curr.next = null;
      console.log(curr);
      return curr;
    }
    while (curr) {
      if (curr.value === val) {
        prev.next = curr.next;
        curr.next = null;
        console.log(curr);
        return curr;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
    console.log("exception");
    return "exception";
  }
  insertB(newVal, existVal) {
    if (!this.head) {
      console.log("empty");
      return;
    }
    let curr = this.head;

    const node = new Node(newVal);
    while (curr.next.value !== existVal) {
      curr = curr.next;
      if (!curr.next) {
        console.log("doesnot Exist");
        return;
      }
    }
    node.next = curr.next;
    curr.next = node;
  }
  insertA(newVal, existVal) {
    if (!this.head) {
      console.log("empty");
      return;
    }
    let curr = this.head;

    const node = new Node(newVal);
    while (curr.value !== existVal) {
      curr = curr.next;
      if (!curr) {
        console.log("doesnot Exist");
        return;
      }
    }
    node.next = curr.next;
    curr.next = node;
  }
  pall() {
    let current = this.head;
    if (!this.head || !this.head.next) return true;

    // Traverse the linked list in order to find the mid-point (slow)
    let slow = this.head,
      fast = this.head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let curr = slow.next;
    let prevNode = null;
    let nextnode = null;
    while (curr != null) {
      nextnode = curr.next;
      curr.next = prevNode;
      prevNode = curr;
      curr = nextnode;
    }

    slow = prevNode;
    console.log(slow);
    // Compare the original linked list with the reversed second half
    while (slow) {
      // console.log(current.value);
      if (current.value !== slow.value) {
        // If a mismatch is detected, break out
        console.log(0);
        return false;
      }
      current = current.next;
      slow = slow.next;
    }
    console.log(1);
    return true;
  }
  // intersection(llA, llB) {
  //   if (llA.head === null || llB.head === null) {
  //     return null;
  //   }
  //   let current_1 = llA.head;
  //   // console.log("ggggggggg",current_1.next);
  //   // console.log(".............",llA);
  //   let current_2 = llB.head;
  //   while (current_1 !== current_2) {
  //     console.log(current_1.value);
  //     current_1 = current_1.next;
  //     current_2 = current_2.next;
  //     if (current_1&&current_2&&current_1.value === current_2.value) {
  //       console.log("fffffff",current_1);
  //       return current_1;
  //     }

  //     if (current_1 === null) {
  //       current_1 = llB.head;
  //     }
  //     if (current_2 === null) {
  //       current_2 = llA.head;
  //     }
  //   }
  //   console.log("p",current_1);
  //   return current_1;
  // }
}

module.exports = LinkedList;

const link = new LinkedList();
const list2 = new LinkedList();
const llc = new LinkedList();
link.append("a");
link.append("b");
link.append("c");
link.append("b");
link.append("a");
link.insertAt("x",0)
console.log((link.toString()));
// console.log(link.pall());
// link.pall();
// link.insertB("H","d");
// link.insertA("H","d");
// console.log(link.toString());

// link.removeElement("d");
// console.log(link.toString());
// list1.append(4)
// list1.append(1)
// list1.append(8)
// list1.append(4)
// list1.append(7)
// // ll.append(1)
// list2.append(5)
// list2.append(6)
// list2.append(10)
// list2.append(8)
// list2.append(4)
// list2.append(5)
// llc.intersection(llA,llB)
function intersection(llA, llB) {
  if (llA.head === null || llB.head === null) {
    return null;
  }
  let current_1 = llA.head;
  let current_2 = llB.head;
  while (current_1 !== current_2){
    current_1 = !current_1 ? llB.head : current_1.next;
    current_2 = !current_2 ? llA.head : current_2.next;
    if(!current_1&&!current_2){
      console.log("no intersection");
      return null;
    }
  
    if(current_1&&current_2&&current_1.value === current_2.value){
      console.log("intersect at",current_1.value);
      return current_1.vlaue;
    }
  }
}

// getIntersectionNode(llA.head, llB.head)
// intersection(llA, llB)
// zipLists(list1,list2)
function zipLists(list1, list2) {
  //The strategy here uses a temporary dummy node as the start of the result list. The pointer tail always points to the last node in the result list, so appending new nodes is easy. The dummy node gives tail something to point to initially when the result list is empty.
  let dummy = new Node();
  let tail = dummy;
  let currA = list1.head;
  let currB = list2.head;
  while(list1&&list2){
    if(list1.val<=list2.val){
    tail.next=list1;
    tail=list1;
    list1=list1.next
    }else {
    tail.next=list2;
    tail=list2;
    list2=list2.next;
    }
    
    }
    if(list1){
    tail.next=list1;
    }
    if(list2){
    tail.next=list2
    }
    console.log(dummy.next);
    return dummy.next
  // const result = new LinkedList();
  // result.head = dummy.next;
  // console.log(result);
  // return result;
}