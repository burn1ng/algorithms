import Node from './Node.js';
import LinkedList from './LinkedList.js'

let first = new Node({value: 3});
let middle = new Node({value: 5});
first.next = middle;

let last = new Node({value: 7});
middle.next = last;

// iterate over the linked list and print node's value 
// Node.print_node_chain(first);

// adding node to the start of linked list
let list1 = new LinkedList();
let node10 = new Node({value: 10});
let node7 = new Node({value: 7});
let node5 = new Node({value: 5});

list1.add_first(node10);
list1.add_first(node7);
list1.add_first(node5);

console.log(list1);
list1.enumerate();