class SLLNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}


class SLL {
    constructor() {
        this.head = null;
    }
    addNodeToFront(value) {
        var newNode = new SLLNode(value);
        if (this.head == null) {
            this.head = newNode;
            return this
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    removeFront() {
        if (this.head) {
            this.head = this.hhead.next;
        }
        return this.head;
    }
    front() {
        if (this.head) {
            return this.head.value;
        }
        return null;
    }
}
var mySLL = new SLL();
mySLL.addNodeToFront(5);
console.log(mySLL);
mySLL.addNodeToFront(7);
console.log(mySLL);
mySLL.addNodeToFront(9);
console.log(mySLL);
console.log(mySLL.head.next.next)