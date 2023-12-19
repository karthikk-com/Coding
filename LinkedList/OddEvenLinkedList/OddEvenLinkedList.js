/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    insert(value, index) {
        if(index <= 0)
            return this.prepend(value);

        if(index >= this.length-1)
            return this.append(value);
        
        const newNode = new Node(value);
        const prevNode = this.traverseToIndex(index-1);
        const currNode = prevNode.next;

        newNode.next = currNode;
        prevNode.next = newNode;
        this.length++;
        return this;
    }

    delete(index) {
        
        if(index >= this.length)
            return `No value correspond to index : ${index} `;

        if(index === 0) {
            this.head = this.head.next;
        } else {
            const prevNode = this.traverseToIndex(index - 1);
            const unwantedNode = prevNode.next;
            prevNode.next = unwantedNode.next;

            if(prevNode.next === null)
                this.tail = prevNode;
        }

        this.length--;
        return this;
    }

    traverseToIndex(index){
        let counter = 0;
        let currNode = this.head;

        while(currNode){
            if(counter === index)
                return currNode
            
            currNode = currNode.next;
            counter++;
        }
        return undefined;
    }

    printAsArrays(){
        let currentNode = this.head;
        let arrValue = [];
        while(currentNode){
            arrValue.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arrValue;
    }
}

const mySinglyLinkedList = new SinglyLinkedList(2);
console.log(mySinglyLinkedList.append(1));
console.log(mySinglyLinkedList.append(3));
console.log(mySinglyLinkedList.append(5));
console.log(mySinglyLinkedList.append(6));
console.log(mySinglyLinkedList.append(4));
console.log(mySinglyLinkedList.append(7));

// console.log(mySinglyLinkedList.append(2));
// console.log(mySinglyLinkedList.append(3));
// console.log(mySinglyLinkedList.append(4));
// console.log(mySinglyLinkedList.append(5));

console.log(mySinglyLinkedList.printAsArrays());

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(linkedlist) {
    let counter = 1;
    let currentNode = linkedlist.head;
    let oddList = new ListNode();
    let evenList = new ListNode();

    console.log(oddList);
    console.log(evenList);

    while(currentNode) {
        if(counter % 2 !== 0){
            oddList.next = currentNode;
            oddList = oddList.next
        } else {
            evenList.next = currentNode;
            evenList = oddList.next
        }
            
        
        currentNode = currentNode.next;
        counter++;
        
    }

    console.log(printAsArrays(oddList));
    console.log(printAsArrays(evenList));

    
    
};

function printAsArrays(node) {
    let currentNode = this.head;
    let arrValue = [];
    while(currentNode){
        arrValue.push(currentNode.value);
        currentNode = currentNode.next;
    }

    return arrValue;
}


console.log(oddEvenList(mySinglyLinkedList));