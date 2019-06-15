function ListNode(val) {
    this.val = val;
    this.next = null;
}
exports.ListNode = ListNode;

exports.createLinkedList = function(arr) {
    let prev; 
    let head;
    arr.map((num, i) => {
        if (i === 0) {
            head = prev = new ListNode(num);
            return;
        }

        let cur = new ListNode(num);
        prev.next = cur;
        prev = cur;
    }) 

    return head;
}
exports.printLinkedList = function (head) {
    let item = head;
    let str = '';
    while (item) {
        str += `${item.val} -> `;
        item = item.next;
    }

    console.log(str.slice(0, str.length - 4));
}

exports.printBinaryTree = function (root, attrs) {
    const OFFSET = 4;
    let printR = (node, offset) => {
        if (node == null) {
            return;
        }

        console.log(" ".repeat(offset) + node.val + (attrs ? `(${attrs.map(attr => node[attr]).join(',')})` : ""));
        if (!node.left && node.right) {
            console.log(`${" ".repeat(offset + OFFSET)}null`);
        }
        else {
            printR(node.left, offset + OFFSET) 
        }
        printR(node.right, OFFSET + offset);
    } 

    printR(root, 0);
}

exports.printNaryTree = (root, n) => {
    let OFFSETS = 4;
    let printR = (root, n, offset) => {
        if (root == null) {
            console.log(" ".repeat(offset) + "null");
            return;
        }
        console.log(" ".repeat(offset) + root.val);
        if (root.children.length) {
            for (let i = 0; i < n; i++) {
                printR(root.children[i], n, offset + OFFSETS);
            }
        }
    }
    printR(root, n, 0);
}

exports.arrayToNaryTree = function(arr, n, TreeNode) {
    let treeMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            continue;
        }
        let val = arr[i];
        // build itself
        let root = treeMap[val];
        if (!root) {
            root = new TreeNode(val);
            treeMap[val] = root;
        }
        // build children
        let children = [];
        for (let j = 0; j < n; j++) {
            children[j] = i * n + j + 1;
        }
        children.map(k => {
            if (arr[k]) {
                let child = new TreeNode(arr[k]);
                treeMap[arr[k]] = child;
                root.children.push(child);
            }
        });
    }

    return treeMap[arr[0]];
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
exports.swap = swap;

class Stack {
    constructor() {
        this._list = [];
    }

    push(val) {
        this._list.push(val);
    }

    pop() {
        if (this.isEmpty()) {
            return -1; 
        }

        let deleted = this._list.splice(this._list.length - 1, 1);

        return deleted[0];
    }

    isEmpty() {
        return this._list.length === 0;
    }

    print() {
        console.log(this._list);
    }
}
exports.Stack = Stack;


class Queue {
    constructor(maxSize) {
        if (!maxSize) {
            throw new Error("maxSize can not be null");
        }
        this.maxSize = maxSize;
        // there wiil be lack of one space compare with maxSize 
        // in circular sequence queue, so add 1 to make the queue right
        this._realMaxSize = maxSize + 1;
        this._queue = [];
        this.front = 0;
        this.rear = 0;
    }
    isEmpty() {
        return this.front === this.rear;
    }
    isFull() {
        return (this.rear + 1) % this._realMaxSize === this.front;
    }
    enter(item) {
        if (this.isFull()) {
            throw new Error('the queue is full');
        }
        this._queue[this.rear] = item;
        this.rear = (this.rear + 1) % this._realMaxSize;
    }
    leave() {
        if (this.isEmpty()) {
            throw new Error('the queue is empty');
        }
        let item = this._queue[this.front];
        delete this._queue[this.front];
        this.front = (this.front + 1) % this._realMaxSize;
        return item;
    }
    /**
     * traverse all the element in the queue
     * @param {function} cb pass every element to cb
     *
     * @return {Array} all the result cb ran
     */
    traverse(cb) {
        if (this.isEmpty()) {
            return [];
        }
        let ret = [];
        let i = this.front;
        while (i % this._realMaxSize < this.rear) {
            ret.push(cb(this._queue[i % this._realMaxSize]));
            i++;
        }
        return ret;
    }
    /**
     * clear the queue
     */
    clear() {
        this._queue = [];
        this.front = 0;
        this.rear = 0;
    }
    print() {
        console.log(this._queue);
    }
}
exports.Queue = Queue;

// for example: [10,5,15,null,null,6,20]
function fullBinaryTreeArrayToTree(arr) {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    } 

    // key is index of treenode in the arr, value is the treenode object
    let treeNodeMap = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            continue; 
        }
        if (!treeNodeMap[i]) {
            treeNodeMap[i] = new TreeNode(arr[i]); 
        } 
        // find its children
        let left = 2 * i + 1;
        if (arr[left] != null) {
            if (!treeNodeMap[left]) {
                treeNodeMap[left] = new TreeNode(arr[left]);
            }
            treeNodeMap[i].left = treeNodeMap[left];
        }
        let right = 2 * i + 2;
        if (arr[right] != null) {
            if (!treeNodeMap[right]) {
                treeNodeMap[right] = new TreeNode(arr[right]);
            }
            treeNodeMap[i].right = treeNodeMap[right];
        }
    }

    return treeNodeMap[0]; // root
}
exports.fullBinaryTreeArrayToTree = fullBinaryTreeArrayToTree;